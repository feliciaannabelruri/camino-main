import Link from "next/link"
import { notFound } from "next/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { StatusBadge } from "@/components/dashboard/status-badge"
import {
  ArrowLeft,
  Mail,
  Calendar,
  Star,
  MessageSquare,
  Hash,
  Trophy,
  TrendingUp,
  Edit,
} from "lucide-react"
import { members } from "@/lib/data"

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const member = members.find((m) => m.id === id)

  if (!member) {
    notFound()
  }

  const maxPoints = 5000

  return (
    <div className="flex flex-col gap-6">
      {/* Back Link */}
      <div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/members">
            <ArrowLeft className="size-4" />
            Back to Members
          </Link>
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="border-border/60">
        <CardContent className="p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <Avatar className="size-16">
                <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                  {member.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold text-foreground">{member.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="capitalize text-xs">
                    {member.role}
                  </Badge>
                  <StatusBadge status={member.status} />
                </div>
                <div className="flex flex-col gap-1 mt-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="size-3.5" />
                    {member.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-3.5" />
                    Joined{" "}
                    {new Date(member.joinedDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Edit className="size-4" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="border-border/60">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                <Star className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Points</p>
                <p className="text-lg font-bold text-foreground">
                  {member.points.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-chart-2/10">
                <MessageSquare className="size-4 text-chart-2" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Posts</p>
                <p className="text-lg font-bold text-foreground">{member.posts}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-chart-4/10">
                <Hash className="size-4 text-chart-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Channels</p>
                <p className="text-lg font-bold text-foreground">{member.channels.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-chart-3/10">
                <Trophy className="size-4 text-chart-3" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Rank</p>
                <p className="text-lg font-bold text-foreground">
                  {"#"}
                  {members
                    .sort((a, b) => b.points - a.points)
                    .findIndex((m) => m.id === member.id) + 1}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Level Progress */}
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="size-4" />
              Level Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground font-medium">
                    Level {Math.floor(member.points / 1000) + 1}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {member.points.toLocaleString()} / {maxPoints.toLocaleString()} XP
                  </span>
                </div>
                <Progress value={(member.points / maxPoints) * 100} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground">
                {(maxPoints - member.points).toLocaleString()} XP needed for next level
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Channels */}
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <Hash className="size-4" />
              Channels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {member.channels.map((channel) => (
                <Badge key={channel} variant="secondary" className="text-sm">
                  {channel}
                </Badge>
              ))}
            </div>
            {member.channels.length === 0 && (
              <p className="text-sm text-muted-foreground">No channels joined yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
