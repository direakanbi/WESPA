"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TableSkeleton, EmptyState } from "@/components/loading-shimmer"
import { PlayerModal } from "@/components/player-modal"

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
    status: "Active",
    profileImage: "/placeholders/nigel-richards.jpg",
    bio: "Nigel Richards is widely regarded as the greatest Scrabble player of all time, known for his extraordinary memorization skills and ability to play in multiple languages.",
    achievements: ["3x World Scrabble Champion", "5x US National Scrabble Champion"],
    recentGames: [
      { opponent: "David Eldar", result: "Win", score: "450-380" },
      { opponent: "Jesse Day", result: "Win", score: "420-350" },
      { opponent: "Komol Panyasophonlert", result: "Win", score: "480-390" },
      { opponent: "Austin Shin", result: "Loss", score: "370-410" },
      { opponent: "Brett Smitheram", result: "Win", score: "430-360" },
      { opponent: "Lewis Mackay", result: "Win", score: "460-380" },
      { opponent: "Jiaqi Woo", result: "Win", score: "410-330" },
      { opponent: "Wellington Jighere", result: "Win", score: "400-320" },
      { opponent: "Pakorn Nemitrmansuk", result: "Loss", score: "350-400" },
    ],
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
    status: "Active",
    profileImage: "/placeholders/david-eldar.jpg",
    bio: "David Eldar is an Australian Scrabble player, a former World Scrabble Champion, renowned for his aggressive playing style and deep vocabulary.",
    achievements: ["World Scrabble Champion 2017", "Australian National Champion"],
    recentGames: [
      { opponent: "Nigel Richards", result: "Loss", score: "380-450" },
      { opponent: "Jesse Day", result: "Win", score: "410-370" },
      { opponent: "Komol Panyasophonlert", result: "Win", score: "430-360" },
      { opponent: "Austin Shin", result: "Win", score: "400-350" },
      { opponent: "Brett Smitheram", result: "Loss", score: "390-420" },
      { opponent: "Lewis Mackay", result: "Win", score: "450-330" },
      { opponent: "Jiaqi Woo", result: "Win", score: "420-300" },
      { opponent: "Wellington Jighere", result: "Win", score: "380-310" },
      { opponent: "Pakorn Nemitrmansuk", result: "Win", score: "410-340" },
    ],
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
    status: "Active",
    profileImage: "/placeholders/jesse-day.jpg",
    bio: "Jesse Day is a prominent American Scrabble player, consistently ranked among the top players in the world. Known for his tactical play and strong endgame.",
    achievements: ["North American Scrabble Champion", "Multiple US Open Titles"],
    recentGames: [
      { opponent: "Komol Panyasophonlert", result: "Win", score: "420-390" },
      { opponent: "Nigel Richards", result: "Loss", score: "350-420" },
      { opponent: "David Eldar", result: "Loss", score: "370-410" },
      { opponent: "Austin Shin", result: "Win", score: "440-360" },
      { opponent: "Brett Smitheram", result: "Win", score: "410-380" },
      { opponent: "Lewis Mackay", result: "Win", score: "430-350" },
      { opponent: "Jiaqi Woo", result: "Loss", score: "360-400" },
      { opponent: "Wellington Jighere", result: "Win", score: "400-330" },
      { opponent: "Pakorn Nemitrmansuk", result: "Win", score: "390-320" },
    ],
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
    status: "Active",
    profileImage: "/placeholders/komol-panyasophonlert.jpg",
    bio: "Komol Panyasophonlert is a Thai Scrabble sensation, a formidable opponent with an impressive record in international tournaments.",
    achievements: ["Thailand National Champion", "King's Cup Champion"],
    recentGames: [
      { opponent: "Jesse Day", result: "Loss", score: "390-420" },
      { opponent: "Nigel Richards", result: "Loss", score: "390-480" },
      { opponent: "David Eldar", result: "Loss", score: "360-430" },
      { opponent: "Austin Shin", result: "Win", score: "410-380" },
      { opponent: "Brett Smitheram", result: "Win", score: "400-370" },
      { opponent: "Lewis Mackay", result: "Win", score: "420-340" },
      { opponent: "Jiaqi Woo", result: "Win", score: "380-310" },
      { opponent: "Wellington Jighere", result: "Loss", score: "350-410" },
      { opponent: "Pakorn Nemitrmansuk", result: "Win", score: "430-360" },
    ],
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
    status: "Active",
    profileImage: "/placeholders/austin-shin.jpg",
    bio: "Austin Shin is a rising star in the American Scrabble scene, known for his tactical prowess and strategic gameplay. A consistent top finisher in national events.",
    achievements: ["Oregon State Champion", "Youngest Player to win a major US Tournament"],
    recentGames: [
      { opponent: "Nigel Richards", result: "Win", score: "410-370" },
      { opponent: "David Eldar", result: "Loss", score: "350-400" },
      { opponent: "Jesse Day", result: "Loss", score: "360-440" },
      { opponent: "Komol Panyasophonlert", result: "Loss", score: "380-410" },
      { opponent: "Brett Smitheram", result: "Win", score: "420-350" },
      { opponent: "Lewis Mackay", result: "Win", score: "390-310" },
      { opponent: "Jiaqi Woo", result: "Win", score: "410-330" },
      { opponent: "Wellington Jighere", result: "Win", score: "400-320" },
      { opponent: "Pakorn Nemitrmansuk", result: "Loss", score: "370-400" },
    ],
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