import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type StatusType = "active" | "inactive" | "pending" | "draft" | "completed" | "paused"

const statusStyles: Record<StatusType, string> = {
  active: "bg-success/15 text-success border-success/25",
  inactive: "bg-muted text-muted-foreground border-border",
  pending: "bg-warning/15 text-warning-foreground border-warning/25",
  draft: "bg-secondary text-secondary-foreground border-border",
  completed: "bg-primary/15 text-primary border-primary/25",
  paused: "bg-destructive/10 text-destructive border-destructive/20",
}

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("capitalize font-medium", statusStyles[status], className)}
    >
      {status}
    </Badge>
  )
}
