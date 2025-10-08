"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RankingsFilters() {
  const [search, setSearch] = useState("")
  const [country, setCountry] = useState("all")
  const [division, setDivision] = useState("all")

  return (
    <div className="mb-8 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Input
            placeholder="Search players..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Country Filter */}
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger>
            <SelectValue placeholder="All Countries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="aus">Australia</SelectItem>
            <SelectItem value="can">Canada</SelectItem>
            <SelectItem value="nzl">New Zealand</SelectItem>
            <SelectItem value="nga">Nigeria</SelectItem>
            <SelectItem value="ind">India</SelectItem>
          </SelectContent>
        </Select>

        {/* Division Filter */}
        <Select value={division} onValueChange={setDivision}>
          <SelectTrigger>
            <SelectValue placeholder="All Divisions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Divisions</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="youth">Youth</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
