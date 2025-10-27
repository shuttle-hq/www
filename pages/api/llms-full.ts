import { NextApiRequest, NextApiResponse } from "next";
import { generateLlmsFullContent } from "lib/blog/make-llms";

export default async function llms_full_txt(
  _: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const content = await generateLlmsFullContent();
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(content);
}
