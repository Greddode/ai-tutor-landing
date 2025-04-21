"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function SettingsPage() {
  const { data: session, update } = useSession()
  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState(session?.user?.name || "")
  const [email, setEmail] = useState(session?.user?.email || "")
  const [emailNotifications, setEmailNotifications] = useState(true)

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would call your API to update the user profile
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update session
      await update({
        ...session,
        user: {
          ...session?.user,
          name,
        },
      })

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="md:ml-64">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <Tabs defaultValue="profile" className="max-w-3xl">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                  <p className="text-sm text-muted-foreground">
                    Email cannot be changed. Contact support for assistance.
                  </p>
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription">
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Current Plan</h3>
                      <p className="text-lg font-bold mt-1">Premium Plan</p>
                      <p className="text-sm text-muted-foreground mt-1">Pre-ordered - Will be activated at launch</p>
                    </div>
                    <div className="bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full">
                      Pre-order
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Billing Information</h3>
                  <p className="text-sm text-muted-foreground">
                    You won't be charged until the product launches. You can cancel your pre-order at any time.
                  </p>
                </div>

                <Button variant="outline" className="w-full">
                  Cancel Pre-order
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive product updates and announcements</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive offers and promotional content</p>
                  </div>
                  <Switch id="marketing-emails" checked={false} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  toast({
                    title: "Settings saved",
                    description: "Your notification preferences have been updated.",
                  })
                }}
              >
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
