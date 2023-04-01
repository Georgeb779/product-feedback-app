import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const reply = await prisma.reply.create({
      data: req.body
    });

    return res.status(201).json(reply);
  }
}
