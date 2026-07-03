import { getDb } from "../api/queries/connection";
import {
  grantCalls,
  impactStats,
  events,
  subscribers,
} from "./schema";

async function seed() {
  const db = getDb();
  console.log("Seeding EFCE database...");

  // Seed impact stats
  await db.insert(impactStats).values([
    { metric: "grants_awarded", value: 2847, label: "Grants Awarded" },
    { metric: "countries_reached", value: 27, label: "EU Countries" },
    { metric: "civic_projects", value: 15620, label: "Civic Projects" },
    { metric: "euro_invested", value: 420000000, label: "Euro Invested" },
  ]);
  console.log("Impact stats seeded");

  // Seed grant calls
  await db.insert(grantCalls).values({
    reference: "CERV-2025-EFCE-01",
    title: "Citizenship and Civic Engagement Programme 2025",
    summary: "Supporting civil society organisations working on citizenship education, civic participation and democratic engagement across the European Union.",
    totalBudget: "15000000.00",
    maxGrantAmount: "500000.00",
    minGrantAmount: "50000.00",
    status: "published",
    deadline: new Date("2025-09-15T23:59:00"),
  });
  await db.insert(grantCalls).values({
    reference: "CERV-2025-EFCE-02",
    title: "European Remembrance and Democratic Values",
    summary: "Projects that commemorate defining historical moments and promote understanding of the EU's shared history, values and diversity.",
    totalBudget: "8000000.00",
    maxGrantAmount: "300000.00",
    minGrantAmount: "25000.00",
    status: "published",
    deadline: new Date("2025-10-30T23:59:00"),
  });
  await db.insert(grantCalls).values({
    reference: "CERV-2025-EFCE-03",
    title: "Rights and Values Programme - Civil Society",
    summary: "Supporting civil society organisations active at local, regional and national levels in promoting and protecting EU values.",
    totalBudget: "22000000.00",
    maxGrantAmount: "750000.00",
    minGrantAmount: "100000.00",
    status: "published",
    deadline: new Date("2025-11-20T23:59:00"),
  });
  console.log("Grant calls seeded");

  // Seed events
  await db.insert(events).values({
    title: "European Civic Engagement Summit 2025",
    description: "Annual gathering of civic leaders, policymakers and civil society organisations to discuss the future of European democracy.",
    location: "Brussels, Belgium",
    eventDate: new Date("2025-09-22T09:00:00"),
    status: "upcoming",
  });
  await db.insert(events).values({
    title: "Youth Participation Forum",
    description: "A forum dedicated to empowering young Europeans to participate actively in democratic processes and civic life.",
    location: "Lisbon, Portugal",
    eventDate: new Date("2025-10-15T10:00:00"),
    status: "upcoming",
  });
  await db.insert(events).values({
    title: "European Volunteer Centre Conference",
    description: "Conference focusing on volunteering as a tool for civic engagement and social cohesion in Europe.",
    location: "Vienna, Austria",
    eventDate: new Date("2025-11-05T09:30:00"),
    status: "upcoming",
  });
  console.log("Events seeded");

  // Seed sample subscribers
  await db.insert(subscribers).values({
    email: "contact@european-ngo.org",
    firstName: "Marie",
    lastName: "Dubois",
    country: "France",
    organization: "European NGO Network",
  });
  await db.insert(subscribers).values({
    email: "info@civic-youth.eu",
    firstName: "Hans",
    lastName: "Mueller",
    country: "Germany",
    organization: "Civic Youth Europe",
  });
  await db.insert(subscribers).values({
    email: "admin@democracy-watch.org",
    firstName: "Elena",
    lastName: "Rossi",
    country: "Italy",
    organization: "Democracy Watch Europe",
  });
  console.log("Subscribers seeded");

  console.log("Seed complete!");
}

seed().catch(console.error);
