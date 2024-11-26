import { Hono } from "hono";
const app = new Hono().get("/", (c) => {
  return c.json({
    message: "i am alive",
    status: 200,
  });
});

export default app;
