import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { getStripeCustomer, createCheckoutSession } from "@/lib/stripe"

const PLANS = {
  basic: process.env.STRIPE_BASIC_PRICE_ID,
  premium: process.env.STRIPE_PREMIUM_PRICE_ID,
  enterprise: process.env.STRIPE_ENTERPRISE_PRICE_ID,
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "You must be logged in to create a checkout session" }, { status: 401 })
    }

    const { plan } = await req.json()

    if (!plan || !PLANS[plan as keyof typeof PLANS]) {
      return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 })
    }

    const priceId = PLANS[plan as keyof typeof PLANS]

    if (!priceId) {
      return NextResponse.json({ error: "Price ID not found for the selected plan" }, { status: 400 })
    }

    // Get or create Stripe customer
    const customerId = await getStripeCustomer({
      email: session.user.email,
      name: session.user.name,
      userId: session.user.id,
    })

    // Create checkout session
    const checkoutSession = await createCheckoutSession({
      priceId,
      customerId,
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`,
      cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=cancelled`,
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
