import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { userId, productId } = req.query;
  const user_id_product_request_id = {
    user_id: userId as string,
    product_request_id: productId as string
  };

  const upvote = await prisma.upvotes.findUnique({
    where: { user_id_product_request_id }
  });

  if (upvote === null) {
    await prisma.upvotes.create({
      data: {
        user_id: userId as string,
        product_request_id: productId as string
      }
    });
    await prisma.productRequest.update({
      where: { id: productId as string },
      data: { upvotes: { increment: 1 } }
    });
    res.status(200).json({ message: "Upvote created" });
  } else {
    await prisma.upvotes.delete({
      where: { user_id_product_request_id }
    });
    await prisma.productRequest.update({
      where: { id: productId as string },
      data: { upvotes: { decrement: 1 } }
    });
    res.status(200).json({ message: "Upvote removed" });
  }
}
