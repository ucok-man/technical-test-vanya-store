#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== MayoBox Application Startup ===${NC}\n"

# Check if docker and docker compose are available
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker is not installed or not in PATH${NC}"
    exit 1
fi

if ! docker compose version &> /dev/null; then
    echo -e "${RED}Error: Docker Compose is not available${NC}"
    exit 1
fi

# Function to check if .env files exist
check_env_files() {
    local dir=$1
    local required_files=("$@")
    shift
    
    for file in "${required_files[@]}"; do
        if [ ! -f "$dir/$file" ]; then
            echo -e "${YELLOW}Warning: $dir/$file not found${NC}"
            if [ -f "$dir/$file.example" ]; then
                echo -e "${YELLOW}Creating $dir/$file from $file.example${NC}"
                cp "$dir/$file.example" "$dir/$file"
            fi
        fi
    done
}

# Check environment files
echo -e "${YELLOW}Checking environment files...${NC}"
check_env_files "server" ".env" ".env.pgcontainer"
check_env_files "web" ".env"
echo ""

# Ask if user wants to run migrations
read -p "Do you want to run database migrations? [y/N] " -n 1 -r
echo
RUN_MIGRATIONS=$REPLY

echo -e "\n${GREEN}Starting server (API + Database)...${NC}"
cd server

if [[ $RUN_MIGRATIONS =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Starting database...${NC}"
    make db/up
    
    echo -e "${YELLOW}Waiting for database to be ready...${NC}"
    make db/wait
    
    echo -e "${YELLOW}Running migrations...${NC}"
    make migrate/up
    
    echo -e "${GREEN}Migrations completed${NC}\n"
fi

echo -e "${YELLOW}Starting server containers...${NC}"
docker compose up -d

# Wait for API to be healthy
echo -e "${YELLOW}Waiting for API to be ready...${NC}"
API_URL="http://localhost:4000"
MAX_RETRIES=30
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if curl -f -s "$API_URL" > /dev/null 2>&1 || curl -f -s "$API_URL/health" > /dev/null 2>&1; then
        echo -e "${GREEN}API is ready!${NC}\n"
        break
    fi
    RETRY_COUNT=$((RETRY_COUNT + 1))
    echo -n "."
    sleep 2
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo -e "\n${YELLOW}Warning: API health check timeout, but continuing...${NC}\n"
fi

cd ..

echo -e "${GREEN}Starting web application...${NC}"
cd web
docker compose up -d
cd ..

echo -e "\n${GREEN}=== All services started successfully! ===${NC}"
echo -e "\n${GREEN}Services:${NC}"
echo -e "  ${YELLOW}API:${NC}      http://localhost:4000"
echo -e "  ${YELLOW}Web:${NC}      http://localhost:3000"
echo -e "  ${YELLOW}Database:${NC} localhost:5433"

# Ask if user wants to view logs
echo ""
read -p "Do you want to view logs for all services? [Y/n] " -n 1 -r
echo

if [[ ! $REPLY =~ ^[Nn]$ ]]; then
    echo -e "\n${YELLOW}Starting log viewer...${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop viewing logs (services will continue running)${NC}\n"
    sleep 2
    
    # Follow logs from both services using docker compose
    # We'll run them in the background and use a trap to clean up
    trap 'echo -e "\n${GREEN}Stopped viewing logs. Services are still running.${NC}"; exit 0' INT
    
    # Start server logs in background
    (cd server && docker compose logs -f --tail=50) &
    SERVER_PID=$!
    
    # Start web logs in background
    (cd web && docker compose logs -f --tail=50) &
    WEB_PID=$!
    
    # Wait for both
    wait $SERVER_PID $WEB_PID
else
    echo -e "\n${YELLOW}To view logs later:${NC}"
    echo -e "  All:    docker compose -f server/docker-compose.yml -f web/docker-compose.yml logs -f"
    echo -e "  Server: cd server && docker compose logs -f"
    echo -e "  Web:    cd web && docker compose logs -f"
    echo -e "\n${YELLOW}To stop all services:${NC}"
    echo -e "  ./stop.sh (or manually run 'docker compose down' in each directory)"
fi