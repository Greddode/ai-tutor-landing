'use server'

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Stripe from "stripe"
import { Session } from "next-auth"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
})

export async function createCheckoutSession(formData: FormData) {
  const session = (await getServerSession(authOptions)) as Session & {
    user: {
      id: string
      email: string
    }
  }

  if (!session?.user?.email) {
    redirect("/login")
  }

  const priceId = formData.get("priceId") as string

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      customer_email: session.user.email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/support`,
      metadata: {
        userId: session.user.id,
      },
    })

    if (!checkoutSession.url) {
      throw new Error("Failed to create checkout session")
    }

    redirect(checkoutSession.url)
  } catch (error) {
    console.error("Error creating checkout session:", error)
    redirect("/support?error=true")
  }
} 