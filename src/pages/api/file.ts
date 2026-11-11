import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import * as path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  res.setHeader("Content-Disposition", "attachment; filename=CV_YOUNES.pdf");
  res.setHeader("Content-Type", "application/text");

  const filePath = path.join(process.cwd(), "src/assets", "CV_YOUNES.pdf");
  const fileStream = fs.createReadStream(filePath);

  fileStream.pipe(res);

  res.on("finish", () => {
    fileStream.close();
  });
}
