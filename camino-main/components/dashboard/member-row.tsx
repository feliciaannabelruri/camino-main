import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StatusBadge } from "@/components/dashboard/status-badge"
import { Badge } from "@/components/ui/badge"
import { TableRow, TableCell } from "@/components/ui/table"
import type { Member } from "@/lib/data"

interface MemberRowProps {
  member: Member
}

export function MemberRow({ member }: MemberRowProps) {
  return (
    <TableRow className="group">
      <TableCell>
        <Link
          href={`/dashboard/members/${member.id}`}
          className="flex items-center gap-3 group-hover:opacity-80 transition-opacity"
        >
          <Avatar className="size-9">
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
              {member.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-foreground text-sm">{member.name}</p>
            <p className="text-xs text-muted-foreground">{member.email}</p>
          </div>
        </Link>
      </TableCell>
      <TableCell>
        <Badge variant="secondary" className="capitalize text-xs">
          {member.role}
        </Badge>
      </TableCell>
      <TableCell>
        <StatusBadge status={member.status} />
      </TableCell>
      <TableCell className="text-muted-foreground text-sm">
        {new Date(member.joinedDate).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </TableCell>
      <TableCell className="text-right font-medium text-sm">
        {member.points.toLocaleString()}
      </TableCell>
      <TableCell className="text-right text-muted-foreground text-sm">
        {member.posts}
      </TableCell>
    </TableRow>
  )
}
