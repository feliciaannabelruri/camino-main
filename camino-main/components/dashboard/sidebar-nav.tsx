"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Megaphone,
  Hash,
  Trophy,
  Settings,
  LogOut,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Members", href: "/dashboard/members", icon: Users },
  { label: "Campaigns", href: "/dashboard/campaigns", icon: Megaphone },
  { label: "Channels", href: "/dashboard/channels", icon: Hash },
  { label: "Leaderboard", href: "/dashboard/leaderboard", icon: Trophy },
]

const bottomItems = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

interface SidebarNavProps {
  open: boolean
  onClose: () => void
}

export function SidebarNav({ open, onClose }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-5 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-2.5" onClick={onClose}>
            <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary">
              <span className="text-sm font-bold text-sidebar-primary-foreground">C</span>
            </div>
            <span className="text-base font-semibold text-sidebar-foreground">Sobat Dana</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={onClose}
          >
            <X className="size-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href))
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="size-[18px] shrink-0" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Bottom */}
        <div className="border-t border-sidebar-border px-3 py-3">
          <ul className="flex flex-col gap-1">
            {bottomItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors"
                >
                  <item.icon className="size-[18px] shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors"
              >
                <LogOut className="size-[18px] shrink-0" />
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
