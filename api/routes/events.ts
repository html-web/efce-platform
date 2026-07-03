import { z } from "zod";
import { createRouter, publicQuery } from "../middleware";
import { getDb } from "../queries/connection";
import { events } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const eventsRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(events).orderBy(desc(events.eventDate));
  }),

  create: publicQuery
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        location: z.string().optional(),
        eventDate: z.string(),
        status: z.string().default("upcoming"),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .insert(events)
        .values({
          ...input,
          eventDate: new Date(input.eventDate),
        })
        .returning();
      return result[0];
    }),

  update: publicQuery
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
        location: z.string().optional(),
        eventDate: z.string().optional(),
        status: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const { id, ...data } = input;
      const updateData: Record<string, unknown> = { ...data };
      if (data.eventDate) {
        updateData.eventDate = new Date(data.eventDate);
      }
      const result = await db
        .update(events)
        .set(updateData)
        .where(eq(events.id, id))
        .returning();
      return result[0];
    }),

  delete: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(events).where(eq(events.id, input.id));
      return { success: true };
    }),
});
