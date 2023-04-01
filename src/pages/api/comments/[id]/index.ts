import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const commentsWithReplies = await prisma.comment.findMany({
      where: {
        product_request_id: req.query.id as string
      },
      orderBy: {
        createdAt: "asc"
      },
      include: {
        user: true,

        replies: {
          include: {
            user: true,
            replied_to_user: true
          },
          orderBy: {
            createdAt: "asc"
          }
        }
      }
    });

    res.json(commentsWithReplies);
  }

  res.status(405).end();
}
