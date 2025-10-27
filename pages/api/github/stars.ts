import type { NextApiRequest, NextApiResponse } from "next";
import { fetchStargazersCount } from "lib/github";

type StarsResponse = { count: number | null };

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<StarsResponse>,
) {
  try {
    const count = await fetchStargazersCount();
    // Cache on the CDN for 1h, serve stale while revalidating for a day
    res.setHeader(
      "Cache-Control",
      "s-maxage=3600, stale-while-revalidate=86400",
    );
    res.status(200).json({ count });
  } catch {
    res.status(200).json({ count: null });
  }
}
