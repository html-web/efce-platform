Using Node.js 20, Tailwind CSS v3.4.19, and Vite v7.2.4

Tailwind CSS has been set up with the shadcn theme

EFCE - European Foundation for Civic Engagement Full-Stack Application

- React 19 + TypeScript frontend with Tailwind CSS and shadcn/ui components
- Hono + tRPC backend with full type safety
- Drizzle ORM with Supabase PostgreSQL
- Complete tRPC routers for grants, applications, contacts, events, stats, subscribers, and audit logs
- Admin dashboard with CRUD operations
- Public website with Hero, About, Programs, Events, and Contact sections

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your Supabase PostgreSQL connection string

# Push database schema
npm run db:push

# Seed the database
npx tsx db/seed.ts

# Start development server
npm run dev
```

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, react-router
- **Backend**: Hono, tRPC 11, superjson
- **Database**: Supabase PostgreSQL, Drizzle ORM, postgres driver
- **API**: tRPC with Zod validation

## Features

### Public Website (`/`)
- Hero section with EFCE branding
- About section with foundation overview
- Mission pillars section
- Active grant programmes with application links
- Impact statistics
- Upcoming events
- Contact form (saves to database via tRPC)

### Admin Dashboard (`/admin`)
- Dashboard overview with statistics
- Grant Calls management (CRUD)
- Applications management with status updates
- Contact Messages viewer with read/unread
- Events management (CRUD)
- Subscribers list

## Database Schema

### Tables
- `grant_calls` - Grant programme listings
- `applications` - Grant applications
- `contacts` - Contact form submissions
- `events` - Events and conferences
- `impact_stats` - Key metrics
- `subscribers` - Newsletter subscribers
- `audit_logs` - Activity audit trail

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - TypeScript type check
- `npm run db:push` - Push schema to database
- `npm run db:seed` - Seed database with sample data
- `npm start` - Start production server
