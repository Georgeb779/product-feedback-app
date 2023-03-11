// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import bcrypt from "bcrypt";

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

const createUserNameWithEmail = (email: string) => {
  const username = email.split("@")[0];
  return username;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
        username: createUserNameWithEmail(req.body.email)
      }
    });
    res.status(200).json({
      data: {
        id: user.id,
        email: user.email,
        password: user.password,
        username: createUserNameWithEmail(user.email),
        image: user.image
      },
      error: undefined
    });
  } catch (error) {
    return res.status(500).json({
      data: undefined,
      error: error
    });
  }
}
