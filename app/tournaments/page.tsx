import { TournamentFilters } from "@/components/tournament-filters"
import { TournamentGrid } from "@/components/tournament-grid"

export default function TournamentsPage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/scrabble-tournament-players-competing.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance">Tournaments</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover upcoming WESPA-sanctioned tournaments and view results from past championships around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Tournaments Content */}
      <section className="section-spacing">
        <div className="container-width">
          <TournamentFilters />
          <TournamentGrid />
        </div>
      </section>
    </main>
  )
}
