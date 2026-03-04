import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { members } from "@/lib/data"

export function RecentMembers() {
  const recentMembers = members.slice(0, 5)

  return (
    <Card className="border-border/60">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold text-foreground">
          Recent Members
        </CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/members" className="text-xs text-muted-foreground">
            View all
            <ArrowRight className="size-3.5 ml-1" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {recentMembers.map((member) => (
            <Link
              key={member.id}
              href={`/dashboard/members/${member.id}`}
              className="flex items-center justify-between rounded-lg p-2 -mx-2 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <StatusBadge status={member.status} />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
