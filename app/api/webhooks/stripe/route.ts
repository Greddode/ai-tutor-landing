import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"
import prisma from "@/lib/prisma"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

const priceIdToTier: Record<string, string> = {
  "price_supporter": "SUPPORTER",
  "price_patron": "PATRON",
  "price_benefactor": "BENEFACTOR",
}

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get("stripe-signature")

    if (!signature) {
      return new NextResponse("No signature provided", { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error(`Webhook signature verification failed:`, err)
      return new NextResponse("Webhook signature verification failed", { status: 400 })
    }

    try {
      switch (event.type) {
        case "customer.subscription.created":
        case "customer.subscription.updated": {
          const subscription = event.data.object as Stripe.Subscription & {
            current_period_end: number
            metadata: { userId: string }
          }
          const priceId = subscription.items.data[0].price.id
          const customerId = subscription.customer as string
          const currentPeriodEnd = subscription.current_period_end
          const tier = priceIdToTier[priceId] || null

          const subscriptionData = {
            userId: subscription.metadata.userId,
            stripeCustomerId: customerId,
            stripeSubscriptionId: subscription.id,
            stripePriceId: priceId,
            stripeCurrentPeriodEnd: currentPeriodEnd ? new Date(currentPeriodEnd * 1000) : null,
            status: subscription.status === "active" ? "ACTIVE" : "INACTIVE",
            tier: tier,
          } as any

          await prisma.subscription.upsert({
            where: {
              stripeSubscriptionId: subscription.id,
            },
            create: subscriptionData,
            update: subscriptionData,
          })
          break
        }

        case "customer.subscription.deleted": {
          const subscription = event.data.object as Stripe.Subscription
          await prisma.subscription.delete({
            where: {
              stripeSubscriptionId: subscription.id,
            },
          })
          break
        }
      }

      return new NextResponse(null, { status: 200 })
    } catch (error) {
      console.error("Error processing webhook:", error)
      return new NextResponse("Webhook handler failed", { status: 500 })
    }
  } catch (error) {
    console.error("Error in webhook route:", error)
    return new NextResponse("Internal server error", { status: 500 })
  }
} 