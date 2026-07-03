import { relations } from "drizzle-orm";
import { grantCalls, applications } from "./schema";

export const grantCallsRelations = relations(grantCalls, ({ many }) => ({
  applications: many(applications),
}));

export const applicationsRelations = relations(applications, ({ one }) => ({
  grantCall: one(grantCalls, {
    fields: [applications.grantCallId],
    references: [grantCalls.id],
  }),
}));
