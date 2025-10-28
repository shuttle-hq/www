import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body as { email?: string };
  if (!email) return res.status(400).json({ error: "Email required" });

  const upstream = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
    },
    body: JSON.stringify({ email_address: email, type: "regular" }),
  });

  const data = await upstream.json();
  if (!upstream.ok)
    return res
      .status(upstream.status)
      .json({ error: data?.detail || "Upstream error" });

  res.status(200).json({ ok: true });
}
