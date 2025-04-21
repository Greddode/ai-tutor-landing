"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollText, MessageSquare, Settings, BarChart3, Users } from "lucide-react"
import { useSession } from "next-auth/react"

export function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const isAdmin = session?.user?.role === "ADMIN"

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Chat History", href: "/dashboard/history", icon: ScrollText },
    { name: "New Chat", href: "/dashboard/chat", icon: MessageSquare },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  const adminNavigation = [{ name: "User Management", href: "/dashboard/admin/users", icon: Users }]

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 pt-16">
      <div className="flex-1 flex flex-col min-h-0 border-r">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={`w-full justify-start ${isActive ? "bg-muted" : ""}`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}

            {isAdmin && (
              <>
                <div className="pt-4 pb-2">
                  <div className="px-2">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Admin</h3>
                  </div>
                  {adminNavigation.map((item) => {
                    const isActive = pathname === item.href

                    return (
                      <Link key={item.name} href={item.href}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={`w-full justify-start mt-1 ${isActive ? "bg-muted" : ""}`}
                        >
                          <item.icon className="mr-3 h-5 w-5" />
                          {item.name}
                        </Button>
                      </Link>
                    )
                  })}
                </div>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
