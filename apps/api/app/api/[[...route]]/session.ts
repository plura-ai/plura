import { Hono } from "hono";
import { auth } from "@repo/auth";

const app = new Hono()
  .get("/", async (c) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers });

    if (!session) return c.json({ message: "no session found" }, 401);

    return c.json({
      session,
    });
  })
  .get("/all", async (c) => {
    const res = await auth.api.listDeviceSessions({
      headers: c.req.raw.headers,
    });
    return c.json(res);
  });

export default app;
