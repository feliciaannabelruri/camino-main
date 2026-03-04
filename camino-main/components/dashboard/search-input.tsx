"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchInputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  className?: string
}

export function SearchInput({
  placeholder = "Search...",
  value,
  onChange,
  className,
}: SearchInputProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9"
      />
    </div>
  )
}
