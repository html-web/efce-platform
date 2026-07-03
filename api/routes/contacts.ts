import { z } from "zod";
import { createRouter, publicQuery } from "../middleware";
import { getDb } from "../queries/connection";
import { contacts } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const contactsRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }),

  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        subject: z.string().optional(),
        message: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .insert(contacts)
        .values(input)
        .returning();
      return result[0];
    }),

  markRead: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .update(contacts)
        .set({ isRead: true })
        .where(eq(contacts.id, input.id))
        .returning();
      return result[0];
    }),

  delete: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(contacts).where(eq(contacts.id, input.id));
      return { success: true };
    }),
});
