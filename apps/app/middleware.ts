import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "@repo/auth";
import { NextResponse, type NextRequest } from "next/server";
const baseDomain =
  process.env.NODE_ENV === "production"
    ? "https://api.plura.pro"
    : "http://localhost:3001";
const redirectUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.plura.pro/auth"
    : "http://localhost:3003/auth";
export default async function authMiddleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    `${baseDomain}/api/auth/get-session`,
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    },
  );

  if (!session) {
    console.log("redirecting to sign in");
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
