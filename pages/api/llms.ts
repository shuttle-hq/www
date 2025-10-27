import { NextApiRequest, NextApiResponse } from "next";
import { llmsTxtContent } from "lib/blog/make-llms";

export default function llms_txt(
  _: NextApiRequest,
  res: NextApiResponse<string>,
) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(llmsTxtContent);
}
