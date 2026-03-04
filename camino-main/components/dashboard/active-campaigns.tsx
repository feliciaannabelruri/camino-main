import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { campaigns } from "@/lib/data"

export function ActiveCampaigns() {
  const activeCampaigns = campaigns.filter(
    (c) => c.status === "active" || c.status === "paused"
  )

  return (
    <Card className="border-border/60">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold text-foreground">
          Active Campaigns
        </CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/campaigns" className="text-xs text-muted-foreground">
            View all
            <ArrowRight className="size-3.5 ml-1" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {activeCampaigns.map((campaign) => {
            const budgetPercent = campaign.budget > 0 ? Math.round((campaign.spent / campaign.budget) * 100) : 0
            return (
              <div key={campaign.id} className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{campaign.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {campaign.engagement}% engagement &middot; {campaign.reach.toLocaleString()} reach
                    </p>
                  </div>
                  <StatusBadge status={campaign.status} />
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={budgetPercent} className="h-1.5 flex-1" />
                  <span className="text-xs text-muted-foreground shrink-0">
                    {budgetPercent}% budget
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
