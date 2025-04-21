"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Check } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "basic"

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const planDetails = {
    basic: {
      name: "Basic Plan",
      price: "$9.99/month",
      features: ["100 AI tutor conversations", "Basic subjects coverage", "Standard response time"],
    },
    premium: {
      name: "Premium Plan",
      price: "$19.99/month",
      features: [
        "Unlimited AI tutor conversations",
        "All subjects coverage",
        "Priority response time",
        "Advanced learning analytics",
      ],
    },
    enterprise: {
      name: "Enterprise Plan",
      price: "$49.99/month",
      features: [
        "Everything in Premium",
        "Team accounts (up to 5 users)",
        "Custom learning paths",
        "Dedicated support",
      ],
    },
  }

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    // Simulate payment processing
    try {
      // In a real application, this would call your Stripe API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful payment
      setIsSuccess(true)
      setIsLoading(false)
    } catch (error) {
      setError("Payment processing failed. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Complete Your Pre-order</CardTitle>
          <CardDescription>Secure your early access to AI Tutor</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Pre-order Successful!</h3>
              <p className="text-muted-foreground">
                Thank you for pre-ordering Arcane Knowledge AI. We'll notify you as soon as the product is ready for
                early access.
              </p>
              <Button asChild className="mt-4">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-lg">{planDetails[plan as keyof typeof planDetails].name}</h3>
                  <p className="text-xl font-bold mt-1">{planDetails[plan as keyof typeof planDetails].price}</p>
                  <ul className="mt-4 space-y-2">
                    {planDetails[plan as keyof typeof planDetails].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Pre-order Benefits</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Early access when the product launches</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Locked-in pricing for 12 months</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Exclusive pre-launch updates</span>
                    </li>
                  </ul>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>You won't be charged until the product launches. You can cancel your pre-order at any time.</p>
                </div>
              </div>

              <Button onClick={handleCheckout} className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Pre-order"
                )}
              </Button>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          {!isSuccess && (
            <div className="text-center text-sm text-muted-foreground">
              By completing your pre-order, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
