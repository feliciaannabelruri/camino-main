"use client"

import { useState, useMemo } from "react"
import { PageHeader } from "@/components/dashboard/page-header"
import { SearchInput } from "@/components/dashboard/search-input"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { EmptyState } from "@/components/dashboard/empty-state"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Megaphone,
  Users,
  BarChart3,
  Calendar,
  DollarSign,
} from "lucide-react"
import { campaigns } from "@/lib/data"

export default function CampaignsPage() {
  const [search, setSearch] = useState("")
  const [tab, setTab] = useState("all")

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter((campaign) => {
      const matchesSearch = campaign.title
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesTab = tab === "all" || campaign.status === tab
      return matchesSearch && matchesTab
    })
  }, [search, tab])

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Campaigns"
        description="Create, manage, and track your community campaigns."
      >
        <Button>
          <Plus className="size-4" />
          New Campaign
        </Button>
      </PageHeader>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="paused">Paused</TabsTrigger>
          </TabsList>
        </Tabs>
        <SearchInput
          placeholder="Search campaigns..."
          value={search}
          onChange={setSearch}
          className="sm:max-w-xs"
        />
      </div>

      {filteredCampaigns.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredCampaigns.map((campaign) => {
            const budgetPercent =
              campaign.budget > 0
                ? Math.round((campaign.spent / campaign.budget) * 100)
                : 0
            return (
              <Card
                key={campaign.id}
                className="border-border/60 hover:border-border transition-colors"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground text-sm">
                      {campaign.title}
                    </h3>
                    <StatusBadge status={campaign.status} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {campaign.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="size-3.5 shrink-0" />
                      <span>{campaign.reach.toLocaleString()} reach</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BarChart3 className="size-3.5 shrink-0" />
                      <span>{campaign.engagement}% engagement</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="size-3.5 shrink-0" />
                      <span>
                        {new Date(campaign.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <DollarSign className="size-3.5 shrink-0" />
                      <span>
                        ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Progress value={budgetPercent} className="h-1.5 flex-1" />
                    <span className="text-xs text-muted-foreground shrink-0">
                      {budgetPercent}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <EmptyState
          icon={Megaphone}
          title="No campaigns found"
          description="Try adjusting your search or filter criteria, or create a new campaign."
        >
          <Button>
            <Plus className="size-4" />
            New Campaign
          </Button>
        </EmptyState>
      )}
    </div>
  )
}
