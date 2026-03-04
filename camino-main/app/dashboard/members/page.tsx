"use client"

import { useState, useMemo } from "react"
import { PageHeader } from "@/components/dashboard/page-header"
import { SearchInput } from "@/components/dashboard/search-input"
import { MemberRow } from "@/components/dashboard/member-row"
import { EmptyState } from "@/components/dashboard/empty-state"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UserPlus, Users } from "lucide-react"
import { members } from "@/lib/data"

export default function MembersPage() {
  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.email.toLowerCase().includes(search.toLowerCase())
      const matchesRole = roleFilter === "all" || member.role === roleFilter
      const matchesStatus = statusFilter === "all" || member.status === statusFilter
      return matchesSearch && matchesRole && matchesStatus
    })
  }, [search, roleFilter, statusFilter])

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Members"
        description="Manage and view all community members."
      >
        <Button>
          <UserPlus className="size-4" />
          Add Member
        </Button>
      </PageHeader>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SearchInput
          placeholder="Search members..."
          value={search}
          onChange={setSearch}
          className="sm:max-w-xs"
        />
        <div className="flex items-center gap-2">
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="moderator">Moderator</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      {filteredMembers.length > 0 ? (
        <div className="rounded-lg border border-border/60 bg-card">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[280px]">Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Points</TableHead>
                <TableHead className="text-right">Posts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <MemberRow key={member.id} member={member} />
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <EmptyState
          icon={Users}
          title="No members found"
          description="Try adjusting your search or filter criteria to find what you're looking for."
        />
      )}
    </div>
  )
}
