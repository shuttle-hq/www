import { exportedPosts } from "lib/blog/make-rss";

export async function GET() {
  return new Response(exportedPosts, {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    },
  });
}