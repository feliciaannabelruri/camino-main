export type Member = {
  id: string
  name: string
  email: string
  avatar: string
  role: "admin" | "moderator" | "member"
  status: "active" | "inactive" | "pending"
  joinedDate: string
  points: number
  posts: number
  channels: string[]
}

export type Campaign = {
  id: string
  title: string
  description: string
  status: "active" | "draft" | "completed" | "paused"
  startDate: string
  endDate: string
  reach: number
  engagement: number
  budget: number
  spent: number
}

export type Channel = {
  id: string
  name: string
  description: string
  type: "forum" | "chat" | "announcement" | "support"
  membersCount: number
  messagesCount: number
  lastActivity: string
  isActive: boolean
}

export type LeaderboardEntry = {
  rank: number
  memberId: string
  name: string
  avatar: string
  points: number
  posts: number
  likes: number
  streak: number
}

export const members: Member[] = [
  {
    id: "m1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    avatar: "SC",
    role: "admin",
    status: "active",
    joinedDate: "2024-01-15",
    points: 4520,
    posts: 234,
    channels: ["General", "Announcements", "Design"],
  },
  {
    id: "m2",
    name: "Marcus Rodriguez",
    email: "marcus.r@example.com",
    avatar: "MR",
    role: "moderator",
    status: "active",
    joinedDate: "2024-02-20",
    points: 3890,
    posts: 187,
    channels: ["General", "Development", "Support"],
  },
  {
    id: "m3",
    name: "Aisha Patel",
    email: "aisha.p@example.com",
    avatar: "AP",
    role: "member",
    status: "active",
    joinedDate: "2024-03-10",
    points: 2750,
    posts: 142,
    channels: ["General", "Marketing"],
  },
  {
    id: "m4",
    name: "James Wilson",
    email: "james.w@example.com",
    avatar: "JW",
    role: "member",
    status: "inactive",
    joinedDate: "2024-01-05",
    points: 1200,
    posts: 56,
    channels: ["General"],
  },
  {
    id: "m5",
    name: "Yuki Tanaka",
    email: "yuki.t@example.com",
    avatar: "YT",
    role: "moderator",
    status: "active",
    joinedDate: "2024-04-01",
    points: 3100,
    posts: 198,
    channels: ["General", "Design", "Development"],
  },
  {
    id: "m6",
    name: "Elena Vasquez",
    email: "elena.v@example.com",
    avatar: "EV",
    role: "member",
    status: "pending",
    joinedDate: "2025-12-15",
    points: 450,
    posts: 12,
    channels: ["General"],
  },
  {
    id: "m7",
    name: "David Kim",
    email: "david.k@example.com",
    avatar: "DK",
    role: "member",
    status: "active",
    joinedDate: "2024-06-20",
    points: 2100,
    posts: 95,
    channels: ["General", "Support", "Marketing"],
  },
  {
    id: "m8",
    name: "Fatima Al-Hassan",
    email: "fatima.h@example.com",
    avatar: "FA",
    role: "member",
    status: "active",
    joinedDate: "2024-07-10",
    points: 1850,
    posts: 78,
    channels: ["General", "Design"],
  },
]

export const campaigns: Campaign[] = [
  {
    id: "c1",
    title: "Spring Onboarding Drive",
    description: "Welcome campaign for new community members with guided tours and introductory challenges.",
    status: "active",
    startDate: "2026-02-01",
    endDate: "2026-03-31",
    reach: 12500,
    engagement: 68,
    budget: 5000,
    spent: 3200,
  },
  {
    id: "c2",
    title: "Dev Challenge 2026",
    description: "Monthly coding challenges with prizes for top contributors and innovative solutions.",
    status: "active",
    startDate: "2026-01-15",
    endDate: "2026-06-15",
    reach: 8900,
    engagement: 82,
    budget: 15000,
    spent: 6500,
  },
  {
    id: "c3",
    title: "Community Feedback Loop",
    description: "Gathering feedback from members to improve community features and engagement strategies.",
    status: "completed",
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    reach: 6200,
    engagement: 54,
    budget: 2000,
    spent: 1800,
  },
  {
    id: "c4",
    title: "Ambassador Program",
    description: "Recruiting and empowering community ambassadors to lead local meetups and events.",
    status: "draft",
    startDate: "2026-04-01",
    endDate: "2026-09-30",
    reach: 0,
    engagement: 0,
    budget: 20000,
    spent: 0,
  },
  {
    id: "c5",
    title: "Content Creator Spotlight",
    description: "Highlighting top community content creators with featured posts and recognition badges.",
    status: "paused",
    startDate: "2025-11-01",
    endDate: "2026-02-28",
    reach: 4300,
    engagement: 45,
    budget: 3000,
    spent: 1200,
  },
]

export const channels: Channel[] = [
  {
    id: "ch1",
    name: "General",
    description: "General discussions about anything community related",
    type: "chat",
    membersCount: 1245,
    messagesCount: 45230,
    lastActivity: "2 minutes ago",
    isActive: true,
  },
  {
    id: "ch2",
    name: "Announcements",
    description: "Official announcements and updates from the team",
    type: "announcement",
    membersCount: 1890,
    messagesCount: 320,
    lastActivity: "1 hour ago",
    isActive: true,
  },
  {
    id: "ch3",
    name: "Development",
    description: "Technical discussions, code reviews, and development help",
    type: "forum",
    membersCount: 890,
    messagesCount: 23400,
    lastActivity: "5 minutes ago",
    isActive: true,
  },
  {
    id: "ch4",
    name: "Design",
    description: "UI/UX design discussions, feedback, and inspiration",
    type: "forum",
    membersCount: 654,
    messagesCount: 12800,
    lastActivity: "15 minutes ago",
    isActive: true,
  },
  {
    id: "ch5",
    name: "Support",
    description: "Get help and support from the community and moderators",
    type: "support",
    membersCount: 1100,
    messagesCount: 18900,
    lastActivity: "8 minutes ago",
    isActive: true,
  },
  {
    id: "ch6",
    name: "Marketing",
    description: "Marketing strategies, campaigns, and growth discussions",
    type: "chat",
    membersCount: 432,
    messagesCount: 6700,
    lastActivity: "30 minutes ago",
    isActive: false,
  },
]

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, memberId: "m1", name: "Sarah Chen", avatar: "SC", points: 4520, posts: 234, likes: 1890, streak: 45 },
  { rank: 2, memberId: "m2", name: "Marcus Rodriguez", avatar: "MR", points: 3890, posts: 187, likes: 1540, streak: 32 },
  { rank: 3, memberId: "m5", name: "Yuki Tanaka", avatar: "YT", points: 3100, posts: 198, likes: 1320, streak: 28 },
  { rank: 4, memberId: "m3", name: "Aisha Patel", avatar: "AP", points: 2750, posts: 142, likes: 980, streak: 21 },
  { rank: 5, memberId: "m7", name: "David Kim", avatar: "DK", points: 2100, posts: 95, likes: 760, streak: 18 },
  { rank: 6, memberId: "m8", name: "Fatima Al-Hassan", avatar: "FA", points: 1850, posts: 78, likes: 650, streak: 15 },
  { rank: 7, memberId: "m4", name: "James Wilson", avatar: "JW", points: 1200, posts: 56, likes: 420, streak: 8 },
  { rank: 8, memberId: "m6", name: "Elena Vasquez", avatar: "EV", points: 450, posts: 12, likes: 85, streak: 3 },
]

export const activityData = [
  { month: "Sep", members: 820, posts: 3200, engagement: 62 },
  { month: "Oct", members: 950, posts: 3800, engagement: 68 },
  { month: "Nov", members: 1020, posts: 4100, engagement: 71 },
  { month: "Dec", members: 1180, posts: 4600, engagement: 65 },
  { month: "Jan", members: 1350, posts: 5200, engagement: 74 },
  { month: "Feb", members: 1520, posts: 5800, engagement: 78 },
]

export const memberGrowthData = [
  { month: "Sep", new: 120, churned: 30 },
  { month: "Oct", new: 180, churned: 50 },
  { month: "Nov", new: 140, churned: 70 },
  { month: "Dec", new: 220, churned: 60 },
  { month: "Jan", new: 250, churned: 80 },
  { month: "Feb", new: 210, churned: 40 },
]
