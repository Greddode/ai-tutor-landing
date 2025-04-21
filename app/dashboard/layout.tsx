import type React from "react"
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login?callbackUrl=/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar user={session.user} />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}
