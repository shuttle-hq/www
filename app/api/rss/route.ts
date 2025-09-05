import { NextResponse } from "next/server";
import { exportedPosts } from "lib/blog/make-rss";

export function GET() {
  return new NextResponse(exportedPosts, {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

