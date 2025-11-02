"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TableSkeleton, EmptyState } from "@/components/loading-shimmer"
import { PlayerModal } from "@/components/player-modal"
import { ratings } from "@/lib/dummyData"
import { useState } from "react"




export function RankingsTable() {
  // Pagination logic 
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10
  const totalPages = Math.ceil(ratings.length/playersPerPage)
  const indexOfLastPlayer = currentPage * playersPerPage
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage
  const currentPlayers = ratings.slice(indexOfFirstPlayer, indexOfLastPlayer)


  const [loading, setLoading] = useState(false)
  const [players, setPlayers] = useState(ratings)
  const [selectedPlayer, setSelectedPlayer] = useState<(typeof ratings)[0] | null>(null)

 
   const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
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
      <div className=" border overflow-x-auto">
        <Table className=" ">
          <TableHeader>
            <TableRow>
              <TableHead className=" text-white font-semibold bg-primary text-lg py-4 px-5">Rank</TableHead>
              <TableHead className=" text-white font-semibold bg-primary text-lg text-center py-4 px-5">Player Name</TableHead>
              <TableHead className=" text-white font-semibold bg-primary text-lg text-center py-4 px-5">Country</TableHead>
              <TableHead className=" text-white font-semibold bg-primary text-lg text-center py-4 px-5">Rating</TableHead>
              <TableHead className=" text-white font-semibold bg-primary text-lg text-center py-4 px-5">Total Games</TableHead>
              <TableHead className=" text-white font-semibold bg-primary text-lg text-center py-4 px-5">Last Played</TableHead>
              <TableHead className=" text-white font-semibold bg-primary text-lg text-center py-4 px-5">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPlayers.map((player) => (
              <TableRow key={player.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-semibold text-lg py-4 px-8">{player.rank}</TableCell>
                
                <TableCell className="font-semibold text-lg py-4 px-8 text-center ">
                  {player.player_name}
                </TableCell>
                <TableCell className="font-semibold text-lg py-4 px-8 text-center ">
                  {player.country}
                </TableCell>
                <TableCell className="font-semibold text-lg  text-center "> <span className="bg-primary/20 py-1 font-semibold px-4 rounded-full">
                  {player.rating}
                </span> </TableCell>
                <TableCell className="font-semibold text-lg  text-center "><span className=" bg-orange-500/25 py-1 font-semibold px-4 rounded-full">{player.total_games}</span></TableCell>
                <TableCell className=" font-semibold">{player.last_played}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" onClick={() => setSelectedPlayer(player)}>
                    View Profile
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between p-4 border-t border-border">
          <p className="text-sm font-semibold text-black">
            Showing {players.length} of {players.length} players
          </p>
           <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={handlePrev} disabled={currentPage === 1}>
              Prev
            </Button>

            <p className="text-sm font-medium text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
            <Button variant="outline" size="sm" onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </Button>
        </div>



          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              Last updated • {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>


      {selectedPlayer && <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />}
    </>
  )
}