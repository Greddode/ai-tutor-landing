import { compare } from "bcryptjs"
import type { NextAuthOptions } from "next-auth"
import type { Session } from "next-auth"
import type { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/lib/prisma"

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email: string
      role: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
    accessToken?: string
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    verifyRequest: "/verify-email",
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!user) {
          throw new Error("No user found")
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error("Invalid password")
        }

        if (!user.emailVerified) {
          throw new Error("Email not verified")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name || null
        session.user.email = token.email || ""
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token, user, account }: { token: JWT; user?: any; account?: any }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
  },
  events: {
    async signIn({ user, account }: { user: any; account?: any }) {
      if (account?.provider === "credentials") {
        await prisma.user.update({
          where: { id: user.id },
          data: { updatedAt: new Date() },
        })
      }
    },
  },
}
