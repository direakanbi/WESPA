import { CommitteeMemberCard } from "@/components/committee-member-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const committeeMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "President",
    country: "United Kingdom",
    countryCode: "UK",
    photo: "/professional-woman-diverse.png",
    bio: "Dr. Johnson has been involved in competitive Scrabble for over 20 years and has served on the WESPA committee since 2015. She holds a PhD in Linguistics and is passionate about promoting the game globally.",
    committee: "Executive",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vice President",
    country: "Singapore",
    countryCode: "SG",
    photo: "/professional-asian-man.png",
    bio: "Michael is a former world champion and has been instrumental in developing Scrabble programs across Asia. He brings extensive tournament organization experience to the committee.",
    committee: "Executive",
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "Secretary",
    country: "Nigeria",
    countryCode: "NG",
    photo: "/professional-african-woman.png",
    bio: "Amara has been a driving force in African Scrabble development, establishing youth programs and training initiatives across the continent. She is a certified tournament director.",
    committee: "Executive",
  },
  {
    id: 4,
    name: "James Martinez",
    role: "Treasurer",
    country: "United States",
    countryCode: "US",
    photo: "/professional-man.jpg",
    bio: "With a background in finance and a passion for Scrabble, James ensures WESPA's financial sustainability and transparency. He has competed in over 100 tournaments worldwide.",
    committee: "Executive",
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Tournament Director",
    country: "Australia",
    countryCode: "AU",
    photo: "/professional-woman-smiling.png",
    bio: "Emma oversees WESPA's tournament standards and regulations. She has directed major international championships and is known for her meticulous attention to fair play.",
    committee: "Tournament",
  },
  {
    id: 6,
    name: "Raj Patel",
    role: "Youth Coordinator",
    country: "India",
    countryCode: "IN",
    photo: "/professional-indian-man.png",
    bio: "Raj leads WESPA's youth initiatives, developing programs that introduce young players to competitive Scrabble. He has coached multiple junior champions.",
    committee: "Youth",
  },
]

export default function CommitteePage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/professional-business-meeting-leadership.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance">WESPA Committee</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the dedicated individuals who guide WESPA's mission to promote competitive Scrabble worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-width">
          <div className="max-w-xs">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Filter by committee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Committees</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
                <SelectItem value="tournament">Tournament</SelectItem>
                <SelectItem value="youth">Youth</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member) => (
              <CommitteeMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
