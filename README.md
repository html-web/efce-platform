# EFCE - European Foundation for Civic Engagement

A full-stack web application for the European Foundation for Civic Engagement (EFCE), built with modern web technologies and designed for production deployment.

## Tech Stack

### Frontend
- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui components
- react-router (client-side routing)
- tRPC client + TanStack Query

### Backend
- Hono (HTTP framework)
- tRPC 11 (type-safe APIs)
- Drizzle ORM (database)
- postgres (PostgreSQL driver)

### Database
- Supabase PostgreSQL
- Drizzle ORM with type-safe queries
- Schema migrations via drizzle-kit

## Project Structure

```
efce-platform/
├── api/                    # Backend API
│   ├── boot.ts            # Server entry point
│   ├── router.ts          # tRPC router registry
│   ├── context.ts         # tRPC context
│   ├── middleware.ts      # tRPC middleware
│   ├── lib/               # Framework utilities
│   ├── queries/           # Database connection
│   └── routes/            # tRPC routers
│       ├── grants.ts
│       ├── applications.ts
│       ├── contacts.ts
│       ├── events.ts
│       ├── stats.ts
│       └── audit.ts
├── db/                    # Database schema
│   ├── schema.ts          # Table definitions
│   ├── relations.ts       # Table relations
│   ├── seed.ts            # Seed data
│   └── migrations/        # Migration files
├── contracts/             # Shared types
├── src/                   # Frontend
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Public website
│   │   └── Admin.tsx      # Admin dashboard
│   ├── providers/         # tRPC provider
│   ├── components/ui/     # shadcn/ui components
│   └── ...
└── public/                # Static assets
    └── efce-logo.png
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env`:
   ```bash
   DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
   ```

3. Push database schema:
   ```bash
   npm run db:push
   ```

4. Seed the database:
   ```bash
   npm run db:seed
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Database Schema

### Tables
- **grant_calls** - Grant/funding programme listings
- **applications** - Grant applications from organizations
- **contacts** - Contact form submissions
- **events** - Upcoming events and conferences
- **impact_stats** - Key performance metrics
- **subscribers** - Newsletter subscribers
- **audit_logs** - Activity audit trail

## API Endpoints

All API endpoints are exposed through tRPC at `/api/trpc`:

- `grants.list` / `grants.create` / `grants.update` / `grants.delete`
- `applications.list` / `applications.create` / `applications.updateStatus`
- `contacts.list` / `contacts.create` / `contacts.markRead`
- `events.list` / `events.create` / `events.update` / `events.delete`
- `stats.list` / `stats.update`
- `subscribers.list` / `subscribers.create`
- `audit.list` / `audit.create`

## Pages

- `/` - Public EFCE website (Hero, About, Programs, Events, Contact)
- `/admin` - Admin dashboard (Grants, Applications, Contacts, Events, Subscribers)

## Deployment

### Frontend (Cloudflare Pages)
The frontend is deployed to Cloudflare Pages from the `dist/public` directory.

### Backend (Railway/Render/Hetzner)
The backend server can be deployed to any Node.js hosting platform:
```bash
npm run build
npm start
```

### Database (Supabase)
Connect your Supabase project and run:
```bash
npm run db:push
npm run db:seed
```

## License

Copyright 2025 European Foundation for Civic Engagement. All rights reserved.
