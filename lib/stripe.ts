import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  typescript: true,
})

export const getStripeCustomer = async ({
  email,
  name,
  userId,
}: {
  email: string
  name?: string | null
  userId: string
}) => {
  // Check if customer already exists
  const customers = await stripe.customers.list({
    email,
    limit: 1,
  })

  if (customers.data.length) {
    // If customer exists, return it
    return customers.data[0].id
  }

  // If not, create a new customer
  const customer = await stripe.customers.create({
    email,
    name: name || undefined,
    metadata: {
      userId,
    },
  })

  return customer.id
}

export const createCheckoutSession = async ({
  priceId,
  customerId,
  successUrl,
  cancelUrl,
}: {
  priceId: string
  customerId: string
  successUrl: string
  cancelUrl: string
}) => {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return session
}
