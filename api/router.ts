import { createRouter, publicQuery } from "./middleware";
import { grantsRouter } from "./routes/grants";
import { applicationsRouter } from "./routes/applications";
import { contactsRouter } from "./routes/contacts";
import { eventsRouter } from "./routes/events";
import { statsRouter, subscribersRouter } from "./routes/stats";
import { auditRouter } from "./routes/audit";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),

  grants: grantsRouter,
  applications: applicationsRouter,
  contacts: contactsRouter,
  events: eventsRouter,
  stats: statsRouter,
  subscribers: subscribersRouter,
  audit: auditRouter,
});

export type AppRouter = typeof appRouter;
