"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect } from "react"

interface PlayerModalProps {
  player: {
    id: number
    rank: number
    name: string
    country: string
    countryCode: string
    rating: number
    totalPoints: number
    club: string
  }
  onClose: () => void
}

// Mock match history data
const mockMatches = [
  {
    id: 1,
    opponent: "David Eldar",
    tournament: "World Championship 2024",
    score: "450-420",
    result: "Win",
    date: "2024-11-15",
  },
  {
    id: 2,
    opponent: "Jesse Day",
    tournament: "Australian Open 2024",
    score: "380-425",
    result: "Loss",
    date: "2024-10-22",
  },
  {
    id: 3,
    opponent: "Austin Shin",
    tournament: "UK Masters 2024",
    score: "465-390",
    result: "Win",
    date: "2024-09-18",
  },
  {
    id: 4,
    opponent: "Komol Panyasophonlert",
    tournament: "Asian Championship 2024",
    score: "410-415",
    result: "Loss",
    date: "2024-08-05",
  },
  {
    id: 5,
    opponent: "Alec Webb",
    tournament: "North American Open 2024",
    score: "495-380",
    result: "Win",
    date: "2024-07-12",
  },
]

export function PlayerModal({ player, onClose }: PlayerModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <div className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-lg shadow-xl flex flex-col">
        <DialogHeader className="flex-shrink-0 pb-4 border-b bg-white sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold text-foreground">{player.name}</DialogTitle>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-secondary/10 transition-colors"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-xs font-medium">Rank</span>
                </div>
                <div className="text-2xl font-bold text-primary">#{player.rank}</div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-xs font-medium">Rating</span>
                </div>
                <div className="text-2xl font-bold">{player.rating}</div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="text-xs font-medium text-muted-foreground mb-1">Country</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded font-mono">{player.countryCode}</span>
                  <span className="text-sm font-medium">{player.country}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="text-xs font-medium text-muted-foreground mb-1">Total Points</div>
                <div className="text-xl font-bold">{player.totalPoints.toLocaleString()}</div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Club Affiliation</div>
              <div className="font-medium">{player.club}</div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Recent Match History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Opponent</TableHead>
                      <TableHead className="font-semibold">Tournament</TableHead>
                      <TableHead className="font-semibold">Score</TableHead>
                      <TableHead className="font-semibold">Result</TableHead>
                      <TableHead className="font-semibold">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockMatches.map((match) => (
                      <TableRow key={match.id} className="hover:bg-muted/50 transition-colors">
                        <TableCell className="font-medium">{match.opponent}</TableCell>
                        <TableCell className="text-sm">{match.tournament}</TableCell>
                        <TableCell className="font-mono text-sm">{match.score}</TableCell>
                        <TableCell>
                          <Badge
                            variant={match.result === "Win" ? "default" : "secondary"}
                            className={match.result === "Win" ? "bg-primary hover:bg-secondary" : ""}
                          >
                            {match.result}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(match.date).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Rating Progression</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Rating chart will be displayed here (API integration)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
