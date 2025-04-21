import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export default async function AdminUsersPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    redirect("/dashboard")
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      subscription: {
        select: {
          stripeCustomerId: true,
          stripePriceId: true,
          stripeCurrentPeriodEnd: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  const formattedUsers = users.map((user) => ({
    id: user.id,
    name: user.name || "N/A",
    email: user.email,
    role: user.role,
    subscriptionStatus: user.subscription ? "Active" : "None",
    subscriptionPlan: user.subscription?.stripePriceId || "N/A",
    createdAt: user.createdAt.toISOString(),
  }))

  return (
    <div className="md:ml-64">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage user accounts and subscriptions</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={formattedUsers} />
        </CardContent>
      </Card>
    </div>
  )
}
