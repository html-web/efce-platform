import { z } from "zod";
import { createRouter, publicQuery } from "../middleware";
import { getDb } from "../queries/connection";
import { auditLogs } from "@db/schema";
import { desc } from "drizzle-orm";

export const auditRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(auditLogs).orderBy(desc(auditLogs.createdAt));
  }),

  create: publicQuery
    .input(
      z.object({
        action: z.string().min(1),
        entity: z.string().min(1),
        entityId: z.number().optional(),
        performedBy: z.string().optional(),
        details: z.record(z.string(), z.any()).optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .insert(auditLogs)
        .values({
          action: input.action,
          entity: input.entity,
          entityId: input.entityId ?? null,
          performedBy: input.performedBy ?? null,
          details: input.details ?? null,
        })
        .returning();
      return result[0];
    }),
});
