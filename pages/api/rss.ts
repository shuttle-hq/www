import type { NextApiRequest, NextApiResponse } from "next";
import { exportedPosts } from "lib/blog/make-rss";

export default function rss_feed(
  _: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(exportedPosts);
}
