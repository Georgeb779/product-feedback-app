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
      return res.status(200).json(comments);
    }
  }

  if (req.method === "POST") {
    const { content, user_id, product_request_id } = req.body;
    const comment = await prisma.comment.create({
      data: {
        content,
        user_id,
        product_request_id
      }
    });
    return res.status(201).json(comment);
  }

  return res.status(405).end();
}
