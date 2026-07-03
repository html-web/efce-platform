import { z } from "zod";
import { createRouter, publicQuery } from "../middleware";
import { getDb } from "../queries/connection";
import { impactStats, subscribers } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const statsRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(impactStats).orderBy(desc(impactStats.updatedAt));
  }),

  update: publicQuery
    .input(
      z.object({
        id: z.number(),
        value: z.number(),
        label: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .update(impactStats)
        .set({
          value: input.value,
          label: input.label,
          updatedAt: new Date(),
        })
        .where(eq(impactStats.id, input.id))
        .returning();
      return result[0];
    }),
});

export const subscribersRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(subscribers).orderBy(desc(subscribers.createdAt));
  }),

  create: publicQuery
    .input(
      z.object({
        email: z.string().email(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        country: z.string().optional(),
        organization: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .insert(subscribers)
        .values(input)
        .returning();
      return result[0];
    }),

  toggleActive: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      const existing = await db
        .select()
        .from(subscribers)
        .where(eq(subscribers.id, input.id));
      if (!existing[0]) return null;
      const result = await db
        .update(subscribers)
        .set({ isActive: !existing[0].isActive })
        .where(eq(subscribers.id, input.id))
        .returning();
      return result[0];
    }),
});
