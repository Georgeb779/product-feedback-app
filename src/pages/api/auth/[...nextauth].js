import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import prisma from "../../../../prisma/client";
import { redirect } from "next/dist/server/api-utils";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 3000
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "jonhdoe@test.com"
        },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.username
          }
        });

        if (!user) {
          console.log("No user found");
        }

        const isValid = await prisma.user.findUnique({
          where: {
            email: credentials.username
          }
        });

        if (!isValid) {
          console.log("Invalid password");
        }

        return user;
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
});
