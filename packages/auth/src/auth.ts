import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@repo/db";
import { multiSession } from "better-auth/plugins";

const BaseDomain = process.env.NODE_ENV === "production" ? process.env.API_DOMAIN as string : "http://localhost:3001";

export const auth = betterAuth({
  trustedOrigins: [
    "https://www.plura.pro",
    "https://plura.pro",
    "https://app.plura.pro",
    "http://localhost:3003",
  ],
  baseURL: BaseDomain,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [multiSession()],
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  ...(process.env.NODE_ENV === "production" && {
    advanced: {
      crossSubDomainCookies: {
        enabled: true,
        domain: "plura.pro",
      },
    },
  }),
});

export type Session = typeof auth.$Infer.Session;
