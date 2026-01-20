# MayoBox Application

Assesment test for panya store.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
  - [Linux/macOS](#linuxmacos)
  - [Windows](#windows)
- [Manual Setup](#manual-setup)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Available Commands](#available-commands)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

---

## 🔧 Prerequisites

Make sure you have the following installed:

- **Docker Desktop** (v20.10 or higher)
  - Download: https://www.docker.com/products/docker-desktop
  - Includes Docker Compose
- **Go** (v1.25.0 or higher) - for local development
- **Node.js** (v20 or higher) - for local development
- **Make** (optional, for Makefile commands, recommended)
  - Linux/macOS: Usually pre-installed
  - Windows: use WSL and install it from there,

---

## 📁 Project Structure

```
mayobox/
├── server/              # Go backend (API + Database)
│   ├── cmd/api/        # Main application
│   ├── internal/       # Internal packages
│   ├── migrations/     # Database migrations
│   ├── Dockerfile      # API container
│   ├── docker-compose.yml
│   ├── Makefile        # Server commands
│   ├── .env.example
│   └── .env.pgcontainer.example
│
├── web/                # Next.js frontend
│   ├── app/           # Next.js pages
│   ├── components/    # React components
│   ├── Dockerfile     # Web container
│   ├── docker-compose.yml
│   ├── Makefile       # Web commands
│   └── .env.example
│
├── start.sh           # Unix startup script
└── stop.sh            # Unix shutdown script
```

---

## 🚀 Quick Start

### Linux/macOS

**1. Clone the repository**

```bash
git clone <repository-url>
cd mayobox
```

**2. Make scripts executable**

```bash
chmod +x start.sh stop.sh
```

**3. Start the application**

```bash
./start.sh
```

The script will:

- ✅ Check if `.env` files exist (creates from `.example` if missing)
- ✅ Prompt to run database migrations
- ✅ Start server and database containers
- ✅ Wait for API to be ready
- ✅ Start web application
- ✅ Offer to view logs

**4. Access the application**

- 🌐 **Web Application**: http://localhost:3000
- 🔌 **API**: http://localhost:4000
- 📚 **API Documentation**: http://localhost:4000/docs
- 🗄️ **Database**: localhost:5433

**5. Stop the application**

```bash
./stop.sh
```

Options:

1. **Stop services** - Stops containers but keeps data
2. **Stop and remove containers** - Removes containers but keeps data
3. **Full cleanup** - ⚠️ Deletes all data including database
4. **Cancel**

Or use arguments directly:

```bash
./stop.sh stop    # Stop services
./stop.sh down    # Remove containers
./stop.sh clean   # Full cleanup (deletes data)
```

---

### Windows

#### Option 1: Using WSL2 (Recommended)

**1. Install WSL2**

```powershell
wsl --install
```

**2. Open WSL and follow Linux instructions above**

---

#### Option 2: Using Git Bash

**1. Install Git for Windows**

- Download from: https://git-scm.com/download/win

**2. Open Git Bash and follow Linux instructions**

---

#### Option 3: Manual Docker Commands

**1. Setup environment files**

Navigate to `server/` folder:

```powershell
# In server directory
copy .env.example .env
copy .env.pgcontainer.example .env.pgcontainer
```

Navigate to `web/` folder:

```powershell
# In web directory
copy .env.example .env
```

**2. Start the database**

```powershell
cd server
docker compose up -d mayobox_postgres
```

**3. Wait for database to be ready**

```powershell
# Wait about 10 seconds, or check logs
docker compose logs mayobox_postgres
```

**4. Run migrations**

Install Go if not installed, then:

```powershell
# Install goose (migration tool)
go install github.com/pressly/goose/v3/cmd/goose@latest

# Run migrations
$env:GOOSE_DRIVER="postgres"
$env:GOOSE_DBSTRING="postgres://mayobox:pa55word@localhost:5433/mayobox?sslmode=disable"
goose -dir ./migrations up
```

**5. Start all services**

```powershell
# In server directory
docker compose up -d

# In web directory
cd ..\web
docker compose up -d
```

**6. Stop services**

```powershell
# Stop server
cd server
docker compose down

# Stop web
cd ..\web
docker compose down
```

---

## 🛠️ Manual Setup

If you want to set up each component manually:

### 1. Database Only

```bash
cd server
make db/up        # Start PostgreSQL
make db/wait      # Wait until ready
make migrate/up   # Run migrations
```

### 2. API Server (Local Development)

```bash
cd server

# Install dependencies
go mod download

# Run with hot reload (requires Air)
make dev

# Or build and run
make build
make start
```

### 3. Web Application (Local Development)

```bash
cd web

# Install dependencies
npm install

# Run development server
npm run dev

# Or build and run production
npm run build
npm start
```

---

## 🌍 Environment Variables

### Server (`server/.env`)

```env
MAYOBOX_PORT="4000"
MAYOBOX_ENV="development"
MAYOBOX_DB_DSN="postgres://mayobox:pa55word@localhost:5433/mayobox?sslmode=disable"
MAYOBOX_DB_MAX_OPEN_CONN="25"
MAYOBOX_DB_MAX_IDLE_CONN="15"
MAYOBOX_DB_MAX_IDLE_TIME="15m"
MAYOBOX_LOG_LEVEL="debug"
MAYOBOX_CORS_TRUSTED_ORIGINS="http://localhost:3000"
```

### Database (`server/.env.pgcontainer`)

```env
POSTGRES_DB=mayobox
POSTGRES_USER=mayobox
POSTGRES_PASSWORD=pa55word
```

### Web (`web/.env`)

```env
NEXT_PUBLIC_BASE_SERVER_URL="http://localhost:4000"
```

---

## 📝 Available Commands

### Server Commands (in `server/` directory)

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `make help`            | Show all available commands    |
| `make dev`             | Run API with hot reload        |
| `make build`           | Build the API binary           |
| `make start`           | Start the built API            |
| `make test`            | Run tests with coverage        |
| `make db/up`           | Start database container       |
| `make db/down`         | Stop database container        |
| `make db/clear`        | Remove database and volumes    |
| `make db/wait`         | Wait until database is ready   |
| `make migrate/new`     | Create new migration           |
| `make migrate/up`      | Apply all migrations           |
| `make migrate/reset`   | Rollback all migrations        |
| `make migrate/version` | Show current migration version |
| `make migrate/status`  | Show migration status          |
| `make compose/up`      | Run API + DB with Docker       |
| `make compose/clear`   | Clean up containers            |
| `make swag`            | Generate Swagger docs          |
| `make tidy`            | Tidy and vendor dependencies   |
| `make audit`           | Run quality control checks     |

### Web Commands (in `web/` directory)

| Command              | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm start`          | Start production server  |
| `npm run lint`       | Run ESLint               |
| `make compose/up`    | Run web with Docker      |
| `make compose/clear` | Clean up containers      |

---

## 📚 API Documentation

Once the server is running, access the interactive API documentation:

- **Swagger UI**: http://localhost:4000/docs
- **OpenAPI Spec**: http://localhost:4000/swagger.yaml

### Available Endpoints

- `GET /` - Health check
- `GET /v1/testimonies` - Get all testimonials
- `GET /v1/faqs` - Get all FAQs

---

## 🐛 Troubleshooting

### Port Already in Use

**Error**: "Port 3000/4000/5433 is already allocated"

**Solution**:

```bash
# Find and kill the process using the port
# On Linux/macOS
lsof -ti:3000 | xargs kill -9
lsof -ti:4000 | xargs kill -9
lsof -ti:5433 | xargs kill -9

# On Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

Or change the port in `docker-compose.yml` or `.env` files.

---

### Database Connection Failed

**Error**: "failed connecting to database"

**Solution**:

1. Ensure database is running: `docker ps`
2. Check database logs: `cd server && docker compose logs mayobox_postgres`
3. Wait for database to be ready: `make db/wait`
4. Verify DSN in `.env` matches `.env.pgcontainer`

---

### Migration Failed

**Error**: "goose: no migrations to run"

**Solution**:

```bash
cd server

# Check migration status
make migrate/status

# Reset and retry
make migrate/reset
make migrate/up
```

---

### Docker Issues on Windows

**Error**: "docker: command not found" or connection errors

**Solution**:

1. Ensure Docker Desktop is running
2. Enable WSL2 integration in Docker Desktop settings
3. Restart Docker Desktop
4. Try using WSL2 terminal instead of PowerShell/CMD

---

### Hot Reload Not Working (Development)

**Server not reloading**:

```bash
# Install Air for Go hot reload
go install github.com/air-verse/air@latest

# Run with Air
cd server
make dev
```

**Web not reloading**:

```bash
# Clear Next.js cache
cd web
rm -rf .next
npm run dev
```

---

### Cannot Access Web Application

**Error**: "This site can't be reached"

**Solutions**:

1. Check if container is running: `docker ps`
2. Check container logs: `cd web && docker compose logs`
3. Verify `NEXT_PUBLIC_BASE_SERVER_URL` in `web/.env`
4. Clear browser cache and cookies
5. Try accessing from different browser or incognito mode

---

## 🔄 Development Workflow

### Making Database Changes

1. Create a new migration:

```bash
cd server
make migrate/new
# Enter migration name when prompted
```

2. Edit the generated SQL files in `server/migrations/`

3. Apply the migration:

```bash
make migrate/up
```

4. Check status:

```bash
make migrate/status
```

---

### Running Tests

```bash
cd server

# Run all tests
make test

# Run tests with gotestdox (better output)
make test/doc

# Run with coverage and race detection
make audit
```

---

### Viewing Logs

**All services**:

```bash
# Server
cd server && docker compose logs -f

# Web
cd web && docker compose logs -f
```

**Specific container**:

```bash
docker logs -f mayobox_api
docker logs -f mayobox_postgres
docker logs -f mayobox_web
```

---

## 📦 Building for Production

### Server

```bash
cd server
make build
# Binary will be in ./bin/api
```

### Web

```bash
cd web
npm run build
npm start
```

### Docker Images

```bash
# Build server image
cd server
docker build -t mayobox-api .

# Build web image
cd web
docker build -t mayobox-web --build-arg NEXT_PUBLIC_BASE_SERVER_URL=http://your-api-url .
```

**Happy coding! 🎉**
