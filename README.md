# GAG Project — Mind Training Platform & MySQL Admin Suite

A complete educational gaming ecosystem combining a **Next.js Mind Training Game Portal** with a centralized **MySQL Game Admin Panel Suite** for managing dynamic quiz questions, projects, and schemas.

---

## Workspace Structure

```
gag_project/
├── package.json                         # Root workspace package & orchestrator
├── .env.example                         # Reference environment variables
├── .gitignore                           # Monorepo gitignore rules
│
├── apps/
│   ├── web/                             # [GAG Mind Training Web App] (Next.js 16)
│   │   ├── prisma/                      # Next.js SQLite/DB schema & migrations
│   │   ├── public/                      # Static assets, games, media
│   │   ├── src/
│   │   │   ├── app/                     # Next.js App Router (pages, games, dashboard)
│   │   │   ├── components/              # UI Components & Navigation
│   │   │   └── lib/                     # mysql-admin.js, auth, and API utilities
│   │   ├── .env
│   │   └── package.json
│   │
│   └── admin/                           # [MySQL Admin Panel Suite]
│       ├── backend/                     # Express.js + Prisma MySQL API Server
│       │   ├── prisma/                  # schema.prisma (Admin, Project, Question, Settings)
│       │   ├── src/                     # Controllers, Routes, Middlewares, Services
│       │   ├── .env
│       │   └── package.json
│       │
│       ├── frontend/                    # Vite + React Admin UI
│       │   ├── src/                     # Pages (Projects, Questions, Admins, Settings, Overview)
│       │   ├── .env
│       │   └── package.json
│       │
│       ├── DOCUMENTATION.html           # Full Admin Panel documentation
│       ├── sample_mcq_questions.docx    # Sample question import template
│       └── package.json                 # Admin suite scripts
```

---

## Quick Start Guide

### 1. Install All Dependencies

Run from the root directory:

```bash
npm run install:all
```

### 2. Configure Environment Files

Ensure each sub-application has its `.env` configured (refer to `.env.example` at root):

- **Web App**: `apps/web/.env`
- **Admin Backend**: `apps/admin/backend/.env`
- **Admin Frontend**: `apps/admin/frontend/.env`

### 3. Generate Prisma Clients & Push Database Schemas

```bash
# Push MySQL schema for Admin Panel
npm run db:push:admin

# Generate Prisma Client for Web App
npm run db:generate:web
```

---

## Running the Applications

### Option A: Run Everything Simultaneously (Recommended)

Starts the Web App (`http://localhost:3000`), Admin API (`http://localhost:5000`), and Admin Frontend (`http://localhost:5173`) in one unified terminal with colored logs:

```bash
npm run dev
# or
npm run dev:all
```

### Option B: Run Services Individually

| Command | Description | URL |
|---------|-------------|-----|
| `npm run dev:web` | Starts Next.js Mind Training App | `http://localhost:3000` |
| `npm run dev:admin` | Starts Admin Backend + Admin UI | `http://localhost:5173` |
| `npm run dev:admin:api` | Starts Admin Backend API only | `http://localhost:5000` |
| `npm run dev:admin:ui` | Starts Admin Frontend UI only | `http://localhost:5173` |

---

## Available NPM Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start all 3 applications concurrently (`web`, `admin:api`, `admin:ui`) |
| `npm run build` | Build both Web App and Admin applications for production |
| `npm run install:all` | Clean install dependencies across root, web, backend, and frontend |
| `npm run db:push:admin` | Apply Prisma schema changes to MySQL database |
| `npm run db:studio:admin` | Open Prisma Studio to browse and edit MySQL database records |
| `npm run db:seed:admin` | Seed the default admin user into MySQL |

---

## Admin Panel Default Credentials

- **Email**: `admin@gamecenter.com`
- **Password**: `admin123`
- *Note*: If database is initialized with `AUTH_BYPASS=true` in `apps/admin/backend/.env`, demo login is bypassed automatically.

---

## Integration Details

- **MySQL Question Sets in Web App**:
  - The Web App includes `apps/web/src/lib/mysql-admin.js` to query question sets and session questions from the MySQL backend (`/api/public/projects/:slug/session`).
- **Cross Navigation**:
  - Web App users and admins can jump directly to the MySQL Admin Panel via the **Account** dropdown.
  - Admin Panel sidebar includes a direct link back to the **Game Portal (App)**.
