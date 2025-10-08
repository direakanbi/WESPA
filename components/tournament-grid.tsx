"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardSkeleton, EmptyState } from "@/components/loading-shimmer"
import Link from "next/link"

// Mock tournament data
const mockTournaments = [
  {
    id: 1,
    name: "World Scrabble Championship 2025",
    location: "London, United Kingdom",
    date: "2025-11-15",
    endDate: "2025-11-22",
    category: "World Championship",
    participants: 128,
    status: "upcoming",
    description: "The premier international Scrabble competition featuring top players from around the globe.",
  },
  {
    id: 2,
    name: "Asian Scrabble Championship",
    location: "Singapore",
    date: "2025-09-10",
    endDate: "2025-09-14",
    category: "Regional",
    participants: 96,
    status: "upcoming",
    description: "Annual championship bringing together the best players from across Asia.",
  },
  {
    id: 3,
    name: "North American Open",
    location: "Toronto, Canada",
    date: "2025-08-05",
    endDate: "2025-08-09",
    category: "Regional",
    participants: 84,
    status: "upcoming",
    description: "Major tournament featuring players from USA, Canada, and beyond.",
  },
  {
    id: 4,
    name: "Youth World Championship 2025",
    location: "Melbourne, Australia",
    date: "2025-07-20",
    endDate: "2025-07-25",
    category: "Youth",
    participants: 64,
    status: "upcoming",
    description: "Showcasing the next generation of Scrabble talent from around the world.",
  },
  {
    id: 5,
    name: "European Championship 2024",
    location: "Paris, France",
    date: "2024-10-12",
    endDate: "2024-10-18",
    category: "Regional",
    participants: 112,
    status: "past",
    winner: "Nigel Richards",
    description: "Completed championship with record participation from European nations.",
  },
  {
    id: 6,
    name: "African Championship 2024",
    location: "Lagos, Nigeria",
    date: "2024-08-20",
    endDate: "2024-08-24",
    category: "Regional",
    participants: 72,
    status: "past",
    winner: "Wellington Jighere",
    description: "Celebrating African Scrabble excellence with players from 15 countries.",
  },
]

export function TournamentGrid() {
  const [loading, setLoading] = useState(false)
  const [tournaments, setTournaments] = useState(mockTournaments)

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (tournaments.length === 0) {
    return <EmptyState title="No tournaments found" description="Try adjusting your filter criteria." />
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-2 mb-2">
                <Badge variant={tournament.status === "upcoming" ? "default" : "secondary"}>
                  {tournament.status === "upcoming" ? "Upcoming" : "Completed"}
                </Badge>
                <Badge variant="outline">{tournament.category}</Badge>
              </div>
              <CardTitle className="font-serif text-xl leading-tight">{tournament.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-3 mb-4 flex-1">
                <div className="flex items-start gap-2 text-sm">
                  <svg
                    className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-muted-foreground">{tournament.location}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg
                    className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-muted-foreground">
                    {new Date(tournament.date).toLocaleDateString()} -{" "}
                    {new Date(tournament.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg
                    className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="text-muted-foreground">{tournament.participants} participants</span>
                </div>
                {tournament.winner && (
                  <div className="flex items-start gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <span className="font-medium">Winner: {tournament.winner}</span>
                  </div>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed pt-2">{tournament.description}</p>
              </div>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href={`/tournaments/${tournament.id}`}>
                  View Details{" "}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          Last updated • {new Date().toLocaleDateString()}
        </p>
      </div>
    </>
  )
}
