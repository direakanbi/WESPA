import { RankingsTable } from "@/components/rankings-table"
import { RankingsFilters } from "@/components/rankings-filters"
import DarkHero from "@/components/DarkHero"

const links =[
  {name:"Home",href:"/"},
  {name:"Ratings",href:"/ratings"},
  {name:"Full rankings",href:"#"},
]

export default function RankingsPage() {
  return (
    <main className="flex-1">
      <DarkHero heading="WESPA RATINGS" text={`Most recent tournament: Autocar Bangkok International Championship 2025 updated on Mon Oct 27 07:24:45 2025`}/>

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
