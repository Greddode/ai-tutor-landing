import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createCheckoutSession } from "@/app/support/actions"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function SupportPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Support AI Tutor</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Help us continue building and improving AI Tutor. Your support allows us to:
      </p>
      <ul className="list-disc list-inside mb-8 space-y-2 text-muted-foreground">
        <li>Develop new features and improvements</li>
        <li>Maintain server infrastructure</li>
        <li>Support ongoing research and development</li>
        <li>Keep the platform accessible to all users</li>
      </ul>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Supporter</CardTitle>
            <CardDescription>Basic support tier</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">$5<span className="text-sm text-muted-foreground">/month</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Early access to new features
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Supporter badge
              </li>
            </ul>
            <form action={createCheckoutSession}>
              <input type="hidden" name="priceId" value="price_supporter" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Patron</CardTitle>
            <CardDescription>Most popular</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">$10<span className="text-sm text-muted-foreground">/month</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                All Supporter benefits
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Direct input on features
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Patron badge
              </li>
            </ul>
            <form action={createCheckoutSession}>
              <input type="hidden" name="priceId" value="price_patron" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benefactor</CardTitle>
            <CardDescription>Maximum support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-4">$25<span className="text-sm text-muted-foreground">/month</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                All Patron benefits
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Monthly 1:1 call with team
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Benefactor badge
              </li>
            </ul>
            <form action={createCheckoutSession}>
              <input type="hidden" name="priceId" value="price_benefactor" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 