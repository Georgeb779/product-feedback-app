import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const products = await prisma.comment.findMany();
    // get all comments for a specific product
    if (req.query.productId) {
      const comments = products.filter(
        (comment) => comment.product_request_id === req.query.productId
      );
      res.status(200).json(comments);
    }
  }

  if (req.method === "POST") {
    const comment = await prisma.comment.create({
      data: req.body
    });
    res.status(201).json(comment);
  }

  res.status(405).end();
}
