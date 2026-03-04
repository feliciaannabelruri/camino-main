import { Users, Megaphone, Hash, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/dashboard/page-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { MemberGrowthChart } from "@/components/dashboard/member-growth-chart"
import { RecentMembers } from "@/components/dashboard/recent-members"
import { ActiveCampaigns } from "@/components/dashboard/active-campaigns"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your community performance and activity."
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Members"
          value="1,520"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
        />
        <StatCard
          title="Active Campaigns"
          value="5"
          change="2 launching soon"
          changeType="neutral"
          icon={Megaphone}
        />
        <StatCard
          title="Active Channels"
          value="6"
          change="+1 new this week"
          changeType="positive"
          icon={Hash}
        />
        <StatCard
          title="Engagement Rate"
          value="78%"
          change="+4% from last month"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ActivityChart />
        <MemberGrowthChart />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentMembers />
        <ActiveCampaigns />
      </div>
    </div>
  )
}
