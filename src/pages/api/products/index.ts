import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const products = await prisma.productRequest.findMany({
      include: {
        Comment: {
          include: {
            replies: true
          }
        }
      }
    });
    res.status(200).json(products);
  }

  if (req.method === "POST") {
    const product = await prisma.productRequest.create({
      data: req.body
    });
    res.status(201).json(product);
  }

  res.status(405).end();
}
