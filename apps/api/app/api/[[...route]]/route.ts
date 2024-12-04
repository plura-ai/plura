import { handle } from "hono/vercel";
import { Hono } from "hono";
import { auth as Auth } from "@repo/auth";
import mail from "./mail";
import test from "./test";
import session from "./session";
import auth from "./auth";
import status from "./status";
import health from "./health";
import user from "./user";
import contributors from "./contributors";
import { cors } from "hono/cors";

export const runtime = "edge";

const app = new Hono<{
  Variables: {
    user: typeof Auth.$Infer.Session.user | null;
    session: typeof Auth.$Infer.Session.session | null;
  };
}>().basePath("/api");

const allowedOrigins = [
  "http://localhost:3003",
  "https://www.plura.pro",
  "https://app.plura.pro",
];

app.use(
  "*",
  cors({
    origin: (origin)=> {
      if(allowedOrigins.includes(origin)){
        return origin
      }
      return null;
    }, // Allow requests from your frontend origin
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders:["Content-Type","Authorization"]
  }),
);

app.route("/health", health);
app.route("/session", session);
app.route("/test", test);
app.route("/mail", mail);
app.route("/auth", auth);
app.route("/status", status);
app.route("/user", user);
app.route("/contributors", contributors);

const GET = handle(app);
const POST = handle(app);
const PATCH = handle(app);
const DELETE = handle(app);
const OPTIONS = handle(app);

export { GET, PATCH, POST, DELETE, OPTIONS };
