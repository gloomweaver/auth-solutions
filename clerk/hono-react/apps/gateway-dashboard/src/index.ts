import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { config } from "dotenv";

config();

const app = new Hono().use("*", clerkMiddleware()).get("/api/hello", (c) => {
  const auth = getAuth(c);
  return c.text("Hello Hono!");
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

export type App = typeof app;
