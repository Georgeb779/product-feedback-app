// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

type Data = {
  data?: {
    id: string;
    email: string;
    password: string | null;
    username: string | null;
    image: string | null;
  };
  error?: string | unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email
      }
    });
    if (user) {
      res.status(200).json({
        data: {
          id: user.id,
          email: user.email,
          password: user.password,
          username: user.username,
          image: user.image
        }
      });
    }
  } catch (error) {
    return res.status(500).json({
      data: undefined,
      error: error
    });
  }
}
