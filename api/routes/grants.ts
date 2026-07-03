import { z } from "zod";
import { createRouter, publicQuery } from "../middleware";
import { getDb } from "../queries/connection";
import { grantCalls } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const grantsRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(grantCalls).orderBy(desc(grantCalls.createdAt));
  }),

  getById: publicQuery
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = getDb();
      const results = await db
        .select()
        .from(grantCalls)
        .where(eq(grantCalls.id, input.id));
      return results[0] ?? null;
    }),

  create: publicQuery
    .input(
      z.object({
        reference: z.string().min(1),
        title: z.string().min(1),
        summary: z.string().optional(),
        totalBudget: z.string().optional(),
        maxGrantAmount: z.string().optional(),
        minGrantAmount: z.string().optional(),
        status: z.string().default("draft"),
        deadline: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .insert(grantCalls)
        .values({
          ...input,
          deadline: input.deadline ? new Date(input.deadline) : null,
        })
        .returning();
      return result[0];
    }),

  update: publicQuery
    .input(
      z.object({
        id: z.number(),
        reference: z.string().optional(),
        title: z.string().optional(),
        summary: z.string().optional(),
        totalBudget: z.string().optional(),
        maxGrantAmount: z.string().optional(),
        minGrantAmount: z.string().optional(),
        status: z.string().optional(),
        deadline: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const { id, ...data } = input;
      const updateData: Record<string, unknown> = { ...data };
      if (data.deadline) {
        updateData.deadline = new Date(data.deadline);
      }
      const result = await db
        .update(grantCalls)
        .set(updateData)
        .where(eq(grantCalls.id, id))
        .returning();
      return result[0];
    }),

  delete: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(grantCalls).where(eq(grantCalls.id, input.id));
      return { success: true };
    }),
});
