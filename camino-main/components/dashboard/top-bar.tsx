"use client"

import { Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface TopBarProps {
  onMenuClick: () => void
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="size-9 lg:hidden"
        onClick={onMenuClick}
      >
        <Menu className="size-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>

      <div className="hidden lg:block" />

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="size-9 relative">
          <Bell className="size-4" />
          <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
          <span className="sr-only">Notifications</span>
        </Button>

        <div className="flex items-center gap-2.5">
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
              AD
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground leading-none">Admin User</p>
            <p className="text-xs text-muted-foreground mt-0.5">admin@community.io</p>
          </div>
        </div>
      </div>
    </header>
  )
}
