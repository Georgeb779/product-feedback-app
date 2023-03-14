import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const products = await prisma.productRequest.findMany({
      where: {
        id: req.query.id as string
      }
    });
    res.status(200).json(products);
  }

  if (req.method === "PUT") {
    const product = await prisma.productRequest.update({
      where: {
        id: req.query.id as string
      },
      data: req.body
    });
    res.status(201).json(product);
  }

  if (req.method === "DELETE") {
    const product = await prisma.productRequest.delete({
      where: {
        id: req.query.id as string
      }
    });
    res.status(201).json(product);
  }

  res.status(403).json({
    error: "Method not allowed"
  });
}
