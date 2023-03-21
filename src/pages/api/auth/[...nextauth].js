import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import prisma from "../../../../prisma/client";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 3000
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
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
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    }
  },
});
