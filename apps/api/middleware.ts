import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const redirectUrl =
  process.env.NODE_ENV === "production"
    ? "https://app.plura.pro/"
    : "http://localhost:3003/dashboard";
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("sec-fetch-mode", "no-cors");
  if (request.nextUrl.pathname.includes("/dashboard")) {
    return NextResponse.redirect(redirectUrl);
  }
  console.log(request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/api/:path*", "/dashboard"],
};
