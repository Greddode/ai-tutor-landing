import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { stripe } from "@/lib/stripe"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET || "")
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as any

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      // Retrieve the subscription details
      const subscription = await stripe.subscriptions.retrieve(session.subscription)

      // Update or create subscription in database
      await prisma.subscription.upsert({
        where: {
          stripeSubscriptionId: subscription.id,
        },
        create: {
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
          userId: session.metadata.userId,
        },
        update: {
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
        },
      })
      break

    case "invoice.payment_succeeded":
      // Retrieve the subscription details
      const paidSubscription = await stripe.subscriptions.retrieve(session.subscription)

      // Update subscription in database
      await prisma.subscription.update({
        where: {
          stripeSubscriptionId: paidSubscription.id,
        },
        data: {
          stripePriceId: paidSubscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(paidSubscription.current_period_end * 1000),
        },
      })
      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
