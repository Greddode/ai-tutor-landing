import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Calendar } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="md:ml-64">
      <h1 className="text-3xl font-bold mb-6">Chat History</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Conversations</CardTitle>
          <CardDescription>View and continue your previous learning sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-medium">No conversations yet</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
              Your chat history will appear here once Arcane Knowledge AI launches and you start your learning sessions.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Learning Calendar</CardTitle>
          <CardDescription>Track your learning schedule and progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-medium">No learning sessions scheduled</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
              Your learning calendar will be available once Arcane Knowledge AI launches.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
