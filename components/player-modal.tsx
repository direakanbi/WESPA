import * as React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface Player {
    id: number
    rank: number
    name: string
  rating: number
    country: string
    countryCode: string
    totalPoints: number
    club: string
  status: string
  profileImage: string
  bio: string
  achievements: string[]
  recentGames: { opponent: string; result: string; score: string }[]
  }

interface PlayerModalProps {
  player: Player | null
  onClose: () => void
}

export function PlayerModal({ player, onClose }: PlayerModalProps) {
  if (!player) {
    return null
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>

      <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] p-0 bg-white rounded-lg shadow-xl flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-300 sm:rounded-lg sm:w-full sm:max-w-lg md:max-w-4xl md:max-h-[90vh] ">
        <DialogHeader className="flex-shrink-0 border-b bg-white sticky top-0 z-10 p-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold text-foreground">{player.name}</DialogTitle>
            <DialogClose
              className="rounded-full p-2 hover:bg-muted/30 transition-colors duration-200 ease-in-out"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto space-y-6 pb-6">
          <div className="flex items-center space-x-4 px-6 pt-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={player.profileImage} alt={player.name} />
              <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium text-muted-foreground">Rank: #{player.rank}</p>
              <p className="text-lg font-medium text-muted-foreground">Rating: {player.rating}</p>
              <p className="text-lg font-medium text-muted-foreground">Total Points: {player.totalPoints.toLocaleString()}</p>
              <p className="text-lg font-medium text-muted-foreground">Country: {player.country}</p>
              <p className="text-lg font-medium text-muted-foreground">Club: {player.club}</p>
              <p className="text-lg font-medium text-muted-foreground">Matches Played: {player.recentGames.length}</p>
              <Badge variant="secondary" className="mt-2">{player.status}</Badge>
                </div>
                </div>

          <div className="px-6">
            <h3 className="font-semibold text-xl mb-2 text-foreground">Bio</h3>
            <p className="text-muted-foreground leading-relaxed">{player.bio}</p>
          </div>

          {player.achievements.length > 0 && (
            <div className="px-6">
              <h3 className="font-semibold text-xl mb-2 text-foreground">Achievements</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {player.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
              </div>
          )}

          {player.recentGames.length > 0 && (
            <div className="px-6">
              <h3 className="font-semibold text-xl mb-2 text-foreground">Match History</h3>
              <div className="space-y-3">
                {player.recentGames.map((game, index) => (
                  <div key={index} className="flex justify-between items-center bg-muted/30 p-3 rounded-lg border border-border text-muted-foreground shadow-sm">
                    <span className="font-medium">vs. {game.opponent}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant={game.result === "Win" ? "primary" : "destructive"}>{game.result}</Badge>
                      <Badge variant="outline">{game.score}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}