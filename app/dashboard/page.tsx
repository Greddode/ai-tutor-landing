import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { BarChart, MessageSquare, Clock, BookOpen } from "lucide-react"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  return (
    <div className="md:ml-64">
      <h1 className="text-3xl font-bold mb-6">Welcome back, {session?.user?.name}</h1>

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
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Prepare for your AI Tutor experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Explore Sample Conversations</p>
                  <p className="text-sm text-muted-foreground">
                    See examples of how AI Tutor can help with different subjects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Prepare Your Learning Goals</p>
                  <p className="text-sm text-muted-foreground">
                    Think about what subjects you want to focus on when AI Tutor launches.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
