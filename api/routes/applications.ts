import { z } from "zod";
import { createRouter, publicQuery } from "../middleware";
import { getDb } from "../queries/connection";
import { applications } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const applicationsRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(applications).orderBy(desc(applications.createdAt));
  }),

  getById: publicQuery
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = getDb();
      const results = await db
        .select()
        .from(applications)
        .where(eq(applications.id, input.id));
      return results[0] ?? null;
    }),

  create: publicQuery
    .input(
      z.object({
        reference: z.string().min(1),
        grantCallId: z.number().optional(),
        projectTitle: z.string().min(1),
        projectSummary: z.string().optional(),
        applicantName: z.string().optional(),
        applicantEmail: z.string().email().optional(),
        applicantOrg: z.string().optional(),
        budget: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .insert(applications)
        .values(input)
        .returning();
      return result[0];
    }),

  updateStatus: publicQuery
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["draft", "submitted", "under_review", "evaluated", "selected", "rejected", "withdrawn"]),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db
        .update(applications)
        .set({
          status: input.status,
          submittedAt: input.status === "submitted" ? new Date() : undefined,
        })
        .where(eq(applications.id, input.id))
        .returning();
      return result[0];
    }),

  delete: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(applications).where(eq(applications.id, input.id));
      return { success: true };
    }),
});
