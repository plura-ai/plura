import { Hono } from "hono";
import { prisma } from "@repo/db";

const app = new Hono().get("/", async (c) => {
  const user = await prisma.user.findMany();
  return c.json({
    user,
  });
});

export default app;
