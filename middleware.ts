import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  // Prefer CSP frame-ancestors; include X-Frame-Options for legacy support
  const frameAncestors = "'self'";
  response.headers.set(
    "Content-Security-Policy",
    `frame-ancestors ${frameAncestors}`
  );
  response.headers.set("X-Frame-Options", "SAMEORIGIN");

  return response;
}

export const config = {
  matcher: "/:path*",
};

