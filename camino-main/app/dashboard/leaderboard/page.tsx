import Link from "next/link"
import { PageHeader } from "@/components/dashboard/page-header"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trophy, Medal, Flame, Star, Heart, MessageSquare } from "lucide-react"
import { leaderboard } from "@/lib/data"
import { cn } from "@/lib/utils"

function getRankDisplay(rank: number) {
  if (rank === 1)
    return (
      <div className="flex size-8 items-center justify-center rounded-full bg-chart-4/15">
        <Trophy className="size-4 text-chart-4" />
      </div>
    )
  if (rank === 2)
    return (
      <div className="flex size-8 items-center justify-center rounded-full bg-muted">
        <Medal className="size-4 text-muted-foreground" />
      </div>
    )
  if (rank === 3)
    return (
      <div className="flex size-8 items-center justify-center rounded-full bg-chart-3/15">
        <Medal className="size-4 text-chart-3" />
      </div>
    )
  return (
    <div className="flex size-8 items-center justify-center">
      <span className="text-sm font-semibold text-muted-foreground">{rank}</span>
    </div>
  )
}

export default function LeaderboardPage() {
  const topThree = leaderboard.slice(0, 3)
  const restOfBoard = leaderboard.slice(3)

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Leaderboard"
        description="Top contributing members ranked by points, posts, and engagement."
      />

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {topThree.map((entry, index) => (
          <Card
            key={entry.memberId}
            className={cn(
              "border-border/60 relative overflow-hidden",
              index === 0 && "sm:order-2 border-chart-4/30",
              index === 1 && "sm:order-1",
              index === 2 && "sm:order-3"
            )}
          >
            {index === 0 && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-chart-4" />
            )}
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-3">{getRankDisplay(entry.rank)}</div>
              <Link href={`/dashboard/members/${entry.memberId}`}>
                <Avatar className="size-14 mb-3">
                  <AvatarFallback
                    className={cn(
                      "text-lg font-bold",
                      index === 0
                        ? "bg-chart-4/15 text-chart-4"
                        : "bg-primary/10 text-primary"
                    )}
                  >
                    {entry.avatar}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Link
                href={`/dashboard/members/${entry.memberId}`}
                className="font-semibold text-foreground text-sm hover:underline"
              >
                {entry.name}
              </Link>
              <p className="text-2xl font-bold text-foreground mt-2">
                {entry.points.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">points</p>

              <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="size-3" />
                  {entry.posts}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="size-3" />
                  {entry.likes}
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="size-3" />
                  {entry.streak}d
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard Table */}
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            <Star className="size-4 text-primary" />
            Full Rankings
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[60px]">Rank</TableHead>
                <TableHead>Member</TableHead>
                <TableHead className="text-right">Points</TableHead>
                <TableHead className="text-right hidden sm:table-cell">Posts</TableHead>
                <TableHead className="text-right hidden sm:table-cell">Likes</TableHead>
                <TableHead className="text-right hidden md:table-cell">Streak</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((entry) => (
                <TableRow key={entry.memberId}>
                  <TableCell>{getRankDisplay(entry.rank)}</TableCell>
                  <TableCell>
                    <Link
                      href={`/dashboard/members/${entry.memberId}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                          {entry.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-foreground text-sm">
                        {entry.name}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-sm">
                    {entry.points.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm hidden sm:table-cell">
                    {entry.posts}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm hidden sm:table-cell">
                    {entry.likes.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right hidden md:table-cell">
                    <div className="flex items-center justify-end gap-1 text-sm">
                      <Flame className="size-3.5 text-chart-3" />
                      <span className="text-muted-foreground">{entry.streak}d</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
