import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock association data - would be API-driven in production
const associations = [
  {
    id: 1,
    name: "Australian Scrabble Players Association",
    country: "Australia",
    region: "Oceania",
    website: "https://www.scrabble.org.au",
    email: "info@scrabble.org.au",
    memberCount: 850,
  },
  {
    id: 2,
    name: "North American Scrabble Players Association",
    country: "United States & Canada",
    region: "North America",
    website: "https://www.scrabbleplayers.org",
    email: "info@scrabbleplayers.org",
    memberCount: 2400,
  },
  {
    id: 3,
    name: "Association of British Scrabble Players",
    country: "United Kingdom",
    region: "Europe",
    website: "https://www.absp.org.uk",
    email: "secretary@absp.org.uk",
    memberCount: 1200,
  },
  {
    id: 4,
    name: "Nigeria Scrabble Federation",
    country: "Nigeria",
    region: "Africa",
    website: "https://www.nigeriascrabble.org",
    email: "info@nigeriascrabble.org",
    memberCount: 1800,
  },
  {
    id: 5,
    name: "Singapore Scrabble Association",
    country: "Singapore",
    region: "Asia",
    website: "https://www.scrabble.org.sg",
    email: "contact@scrabble.org.sg",
    memberCount: 320,
  },
  {
    id: 6,
    name: "New Zealand Association of Scrabble Players",
    country: "New Zealand",
    region: "Oceania",
    website: "https://www.scrabble.org.nz",
    email: "secretary@scrabble.org.nz",
    memberCount: 450,
  },
]

const regions = ["All Regions", "Africa", "Asia", "Europe", "North America", "Oceania", "South America"]

export default function AssociationsPage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/world-map-continents-global-international.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance">Global Associations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              WESPA member associations from around the world, united in promoting competitive English-language
              Scrabble.
            </p>
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-width">
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <Button key={region} variant="outline" size="sm">
                {region}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Associations Grid */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associations.map((association) => (
              <Card key={association.id} className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="mb-2">{association.region}</Badge>
                    <h3 className="font-semibold text-lg mb-1">{association.name}</h3>
                    <p className="text-sm text-muted-foreground">{association.country}</p>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20" />
                      </svg>
                      <a
                        href={association.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors truncate"
                      >
                        {association.website.replace("https://", "")}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a href={`mailto:${association.email}`} className="hover:text-primary transition-colors truncate">
                        {association.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">
                      <span className="font-semibold text-foreground">{association.memberCount}</span> members
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <a href={association.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <svg className="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-spacing bg-muted/30">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-3xl mb-4">Join the WESPA Network</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Is your national or regional Scrabble association interested in becoming a WESPA member? Learn about the
              benefits and application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/membership">Apply for Membership</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
