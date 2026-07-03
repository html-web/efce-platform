import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  decimal,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";

// -- EFCE Core Tables --

export const grantCalls = pgTable("grant_calls", {
  id: serial("id").primaryKey(),
  reference: varchar("reference", { length: 50 }).notNull().unique(),
  title: varchar("title", { length: 300 }).notNull(),
  summary: text("summary"),
  totalBudget: decimal("total_budget", { precision: 14, scale: 2 }),
  maxGrantAmount: decimal("max_grant_amount", { precision: 12, scale: 2 }),
  minGrantAmount: decimal("min_grant_amount", { precision: 12, scale: 2 }),
  status: varchar("status", { length: 20 }).notNull().default("draft"),
  deadline: timestamp("deadline"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  reference: varchar("reference", { length: 50 }).notNull().unique(),
  grantCallId: integer("grant_call_id").references(() => grantCalls.id),
  projectTitle: varchar("project_title", { length: 300 }).notNull(),
  projectSummary: text("project_summary"),
  applicantName: varchar("applicant_name", { length: 200 }),
  applicantEmail: varchar("applicant_email", { length: 200 }),
  applicantOrg: varchar("applicant_org", { length: 200 }),
  budget: decimal("budget", { precision: 14, scale: 2 }),
  status: varchar("status", { length: 20 }).notNull().default("draft"),
  submittedAt: timestamp("submitted_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  subject: varchar("subject", { length: 200 }),
  message: text("message"),
  isRead: boolean("is_read").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 300 }).notNull(),
  description: text("description"),
  location: varchar("location", { length: 300 }),
  eventDate: timestamp("event_date"),
  status: varchar("status", { length: 20 }).notNull().default("upcoming"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const impactStats = pgTable("impact_stats", {
  id: serial("id").primaryKey(),
  metric: varchar("metric", { length: 100 }).notNull(),
  value: integer("value").notNull(),
  label: varchar("label", { length: 200 }),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 200 }).notNull().unique(),
  firstName: varchar("first_name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  country: varchar("country", { length: 100 }),
  organization: varchar("organization", { length: 200 }),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const auditLogs = pgTable("audit_logs", {
  id: serial("id").primaryKey(),
  action: varchar("action", { length: 100 }).notNull(),
  entity: varchar("entity", { length: 100 }).notNull(),
  entityId: integer("entity_id"),
  performedBy: varchar("performed_by", { length: 200 }),
  details: jsonb("details"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
