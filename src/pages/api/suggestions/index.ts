import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const products = await prisma.productRequest.findMany();
    const suggestions = products.filter(
      (product) => product.status === "suggestion"
    );
    res.status(200).json(suggestions);
  }

  res.status(405).end();
}
