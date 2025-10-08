"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TableSkeleton, EmptyState } from "@/components/loading-shimmer"
import { PlayerModal } from "@/components/player-modal"

// Mock data - will be replaced with API calls
const mockPlayers = [
  {
    id: 1,
    rank: 1,
    name: "Nigel Richards",
    country: "New Zealand",
    countryCode: "NZL",
    rating: 2180,
    totalPoints: 15420,
    club: "Auckland Scrabble Club",
  },
  {
    id: 2,
    rank: 2,
    name: "David Eldar",
    country: "Australia",
    countryCode: "AUS",
    rating: 2095,
    totalPoints: 14230,
    club: "Melbourne Scrabble Association",
  },
  {
    id: 3,
    rank: 3,
    name: "Jesse Day",
    country: "United States",
    countryCode: "USA",
    rating: 2048,
    totalPoints: 13890,
    club: "Berkeley Scrabble Club",
  },
  {
    id: 4,
    rank: 4,
    name: "Komol Panyasophonlert",
    country: "Thailand",
    countryCode: "THA",
    rating: 2012,
    totalPoints: 13450,
    club: "Bangkok Scrabble Club",
  },
  {
    id: 5,
    rank: 5,
    name: "Austin Shin",
    country: "United States",
    countryCode: "USA",
    rating: 1998,
    totalPoints: 13120,
    club: "Portland Scrabble Club",
  },
]

export function RankingsTable() {
  const [loading, setLoading] = useState(false)
  const [players, setPlayers] = useState(mockPlayers)
  const [selectedPlayer, setSelectedPlayer] = useState<(typeof mockPlayers)[0] | null>(null)
  const [sortField, setSortField] = useState<"rank" | "rating" | "totalPoints">("rank")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const handleSort = (field: "rank" | "rating" | "totalPoints") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }

    const sorted = [...players].sort((a, b) => {
      const aVal = a[field]
      const bVal = b[field]
      return sortDirection === "asc" ? aVal - bVal : bVal - aVal
    })
    setPlayers(sorted)
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <TableSkeleton rows={10} />
        </CardContent>
      </Card>
    )
  }

  if (players.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <EmptyState title="No players found" description="Try adjusting your search or filter criteria." />
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 font-semibold"
                      onClick={() => handleSort("rank")}
                    >
                      Rank
                      {sortField === "rank" &&
                        (sortDirection === "asc" ? (
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        ))}
                    </Button>
                  </TableHead>
                  <TableHead>Player</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 font-semibold"
                      onClick={() => handleSort("rating")}
                    >
                      Rating
                      {sortField === "rating" &&
                        (sortDirection === "asc" ? (
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        ))}
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 font-semibold"
                      onClick={() => handleSort("totalPoints")}
                    >
                      Total Points
                      {sortField === "totalPoints" &&
                        (sortDirection === "asc" ? (
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        ))}
                    </Button>
                  </TableHead>
                  <TableHead className="w-32">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {players.map((player) => (
                  <TableRow key={player.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">#{player.rank}</TableCell>
                    <TableCell>
                      <div className="font-medium">{player.name}</div>
                      <div className="text-sm text-muted-foreground">{player.club}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded font-mono">{player.countryCode}</span>
                        <span className="text-sm">{player.country}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold text-primary">{player.rating}</span>
                    </TableCell>
                    <TableCell>{player.totalPoints.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => setSelectedPlayer(player)}>
                        View Profile
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between p-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Showing {players.length} of {players.length} players
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                Last updated • {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedPlayer && <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />}
    </>
  )
}
