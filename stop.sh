#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== MayoBox Application Shutdown ===${NC}\n"

# Function to display menu
show_menu() {
    echo -e "${YELLOW}Select shutdown option:${NC}"
    echo "  1) Stop all services (keep data)"
    echo "  2) Stop and remove containers (keep data)"
    echo "  3) Full cleanup (remove containers and volumes - ${RED}DELETES DATA${NC})"
    echo "  4) Cancel"
    echo ""
}

# Function to stop services
stop_services() {
    echo -e "\n${YELLOW}Stopping web application...${NC}"
    cd web
    docker compose stop
    cd ..
    
    echo -e "${YELLOW}Stopping server and database...${NC}"
    cd server
    docker compose stop
    cd ..
    
    echo -e "${GREEN}All services stopped${NC}"
}

# Function to down services (remove containers)
down_services() {
    echo -e "\n${YELLOW}Stopping and removing web containers...${NC}"
    cd web
    docker compose down
    cd ..
    
    echo -e "${YELLOW}Stopping and removing server containers...${NC}"
    cd server
    docker compose down
    cd ..
    
    echo -e "${GREEN}All containers removed${NC}"
}

# Function to full cleanup (remove containers and volumes)
full_cleanup() {
    echo -e "\n${RED}WARNING: This will delete all data including the database!${NC}"
    read -p "Are you sure you want to continue? [y/N] " -n 1 -r
    echo
    
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}Cleanup cancelled${NC}"
        exit 0
    fi
    
    echo -e "\n${YELLOW}Performing full cleanup of web...${NC}"
    cd web
    docker compose down -v
    cd ..
    
    echo -e "${YELLOW}Performing full cleanup of server and database...${NC}"
    cd server
    docker compose down -v
    cd ..
    
    echo -e "${GREEN}Full cleanup completed - all containers and volumes removed${NC}"
}

# Check if docker compose is available
if ! docker compose version &> /dev/null; then
    echo -e "${RED}Error: Docker Compose is not available${NC}"
    exit 1
fi

# If argument provided, use it directly
if [ $# -eq 1 ]; then
    case $1 in
        stop)
            stop_services
            ;;
        down)
            down_services
            ;;
        clean|cleanup)
            full_cleanup
            ;;
        *)
            echo -e "${RED}Invalid argument. Use: stop, down, or clean${NC}"
            exit 1
            ;;
    esac
    exit 0
fi

# Interactive menu
show_menu
read -p "Enter your choice [1-4]: " -n 1 -r
echo

case $REPLY in
    1)
        stop_services
        ;;
    2)
        down_services
        ;;
    3)
        full_cleanup
        ;;
    4)
        echo -e "${YELLOW}Cancelled${NC}"
        exit 0
        ;;
    *)
        echo -e "${RED}Invalid option${NC}"
        exit 1
        ;;
esac

echo -e "\n${BLUE}=== Shutdown Complete ===${NC}"