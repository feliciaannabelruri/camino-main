"use client"

import { useState, useMemo } from "react"
import { PageHeader } from "@/components/dashboard/page-header"
import { SearchInput } from "@/components/dashboard/search-input"
import { EmptyState } from "@/components/dashboard/empty-state"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plus,
  Hash,
  Users,
  MessageSquare,
  Clock,
  Megaphone,
  LifeBuoy,
  MessagesSquare,
} from "lucide-react"
import { channels } from "@/lib/data"

const typeIcons: Record<string, React.ElementType> = {
  forum: MessagesSquare,
  chat: Hash,
  announcement: Megaphone,
  support: LifeBuoy,
}

const typeColors: Record<string, string> = {
  forum: "bg-chart-1/10 text-chart-1",
  chat: "bg-chart-2/10 text-chart-2",
  announcement: "bg-chart-4/10 text-chart-4",
  support: "bg-chart-3/10 text-chart-3",
}

export default function ChannelsPage() {
  const [search, setSearch] = useState("")

  const filteredChannels = useMemo(() => {
    return channels.filter((channel) =>
      channel.name.toLowerCase().includes(search.toLowerCase()) ||
      channel.description.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Channels"
        description="Manage your community channels and communication spaces."
      >
        <Button>
          <Plus className="size-4" />
          New Channel
        </Button>
      </PageHeader>

      <SearchInput
        placeholder="Search channels..."
        value={search}
        onChange={setSearch}
        className="sm:max-w-xs"
      />

      {filteredChannels.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredChannels.map((channel) => {
            const TypeIcon = typeIcons[channel.type] || Hash
            return (
              <Card
                key={channel.id}
                className="border-border/60 hover:border-border transition-colors"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${typeColors[channel.type]}`}
                    >
                      <TypeIcon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground text-sm truncate">
                          {channel.name}
                        </h3>
                        {channel.isActive && (
                          <span className="flex size-2 rounded-full bg-success shrink-0" />
                        )}
                      </div>
                      <Badge variant="secondary" className="capitalize text-[10px] mt-1">
                        {channel.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {channel.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="size-3.5 shrink-0" />
                      <span>{channel.membersCount.toLocaleString()} members</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MessageSquare className="size-3.5 shrink-0" />
                      <span>{channel.messagesCount.toLocaleString()} messages</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="size-3.5 shrink-0" />
                      <span>{channel.lastActivity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <EmptyState
          icon={Hash}
          title="No channels found"
          description="Try adjusting your search or create a new channel."
        >
          <Button>
            <Plus className="size-4" />
            New Channel
          </Button>
        </EmptyState>
      )}
    </div>
  )
}
