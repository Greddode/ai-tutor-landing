import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function SubscriptionPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/auth/signin")
  }

  const subscription = await prisma.subscription.findUnique({
    where: { userId: session.user.id },
  })

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Subscription</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription settings
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>
            Your current subscription details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Status</p>
                <Badge variant={subscription?.status === "ACTIVE" ? "default" : "secondary"}>
                  {subscription?.status || "No subscription"}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Plan</p>
                <Badge variant="outline">
                  {subscription?.stripePriceId || "No plan selected"}
                </Badge>
              </div>
            </div>
            {subscription?.status === "ACTIVE" && (
              <div className="space-y-1">
                <p className="text-sm font-medium">Next Billing Date</p>
                <p className="text-sm text-muted-foreground">
                  {subscription?.stripeCurrentPeriodEnd
                    ? new Date(subscription.stripeCurrentPeriodEnd).toLocaleDateString()
                    : "Not available"}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 