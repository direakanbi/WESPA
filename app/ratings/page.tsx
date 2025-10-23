import { RankingsTable } from "@/components/rankings-table"
import { RankingsFilters } from "@/components/rankings-filters"

export default function RankingsPage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/scrabble-board-tournament-competition.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance">Player Rankings</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Official WESPA player ratings and rankings, updated regularly based on tournament performance worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Rankings Content */}
      <section className="section-spacing">
        <div className="container-width">
          <RankingsFilters />
          <RankingsTable />
        </div>
      </section>
    </main>
  )
}
