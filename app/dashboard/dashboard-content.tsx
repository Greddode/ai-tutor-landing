'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSession } from "next-auth/react"
import { BarChart, MessageSquare, Clock, BookOpen, Heart, Settings } from "lucide-react"
import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function LoadingCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="h-8 w-12 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
      </CardContent>
    </Card>
  )
}

function StatsGrid() {
  const { data: session } = useSession()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0</div>
          <p className="text-xs text-muted-foreground">Start chatting with AI Tutor</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Learning Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0 min</div>
          <p className="text-xs text-muted-foreground">Track your learning progress</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Subjects Explored</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0</div>
          <p className="text-xs text-muted-foreground">Discover new topics to learn</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">0 days</div>
          <p className="text-xs text-muted-foreground">Build a consistent learning habit</p>
        </CardContent>
      </Card>
    </div>
  )
}

function InfoCards() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Product Status</CardTitle>
          <CardDescription>Updates on AI Tutor development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div>
                <p className="font-medium">In Development</p>
                <p className="text-sm text-muted-foreground">
                  Arcane Knowledge AI is currently being built. Thank you for your pre-order!
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground">
                We'll send you updates on our progress and notify you when early access is available.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Support & Settings</CardTitle>
          <CardDescription>Manage your account and support AI Tutor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-2">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Become a Supporter</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Your support helps us continue developing and improving AI Tutor.
                </p>
                <Link href="/support">
                  <Button className="mr-4">View Support Options</Button>
                </Link>
                <Link href="/settings/subscription">
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Subscription
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function DashboardContent() {
  const { data: session } = useSession()

  return (
    <div className="md:ml-64">
      <h1 className="text-3xl font-bold mb-6">Welcome back, {session?.user?.name}</h1>

      <Suspense fallback={
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      }>
        <StatsGrid />
      </Suspense>

      <Suspense fallback={
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <LoadingCard />
          <LoadingCard />
        </div>
      }>
        <InfoCards />
      </Suspense>
    </div>
  )
} 