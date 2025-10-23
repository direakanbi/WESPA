import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* HERO SECTION: Centered, Sleek Design with Image Background */}
      <section className="relative py-20 md:py-36 overflow-hidden min-h-[50vh] flex items-center justify-center text-center">
        
        {/* New Background Image Layer: Using local image named 'hospitality.jpg' */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          // Reference the image from the public folder
          style={{ backgroundImage: `url('/images/hospitality.jpg')` }}
        />
        
        {/* Dark Overlays for Text Contrast (Crucial for sleek, readable text) */}
        <div className="absolute inset-0 bg-black/70 z-0" /> 
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-background/50 z-0" />
        
        <div className="container-width relative z-10">
          {/* Centering the Content and applying high-impact typography */}
          <div className="max-w-4xl mx-auto">
            <h1 className="font-extrabold text-5xl md:text-7xl mb-6 text-balance text-white drop-shadow-lg">
              WESPA: The Global Governing Body
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              We are the World English-Language Scrabble Players Association, the official international organization for competitive English-language Scrabble.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION (Original Code) */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To promote and develop competitive English-language Scrabble worldwide, fostering a global community
                  of players through fair competition, standardized rules, and inclusive participation across all
                  nations and skill levels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where Scrabble is recognized as a premier mind sport, with thriving communities on every
                  continent, accessible pathways for new players, and opportunities for champions to compete at the
                  highest international level.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION (Original Code) */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl mb-8 text-center">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-bold text-2xl text-primary">1999</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-primary/20 pl-6">
                  <h3 className="font-semibold text-xl mb-2">WESPA Founded</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Established to provide unified governance for English-language Scrabble competitions worldwide,
                    bringing together national associations under one global framework.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-bold text-2xl text-primary">2005</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-primary/20 pl-6">
                  <h3 className="font-semibold text-xl mb-2">Global Rating System</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Launched the comprehensive WESPA rating system, providing standardized player rankings across all
                    member nations and tournaments.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-bold text-2xl text-primary">2012</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-primary/20 pl-6">
                  <h3 className="font-semibold text-xl mb-2">Youth Initiative Launch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Introduced dedicated youth programs and championships to nurture the next generation of Scrabble
                    players and ensure the sport's continued growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-bold text-2xl text-primary">2020</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-primary/20 pl-6">
                  <h3 className="font-semibold text-xl mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Expanded online tournament infrastructure and digital resources, enabling global participation
                    during challenging times and beyond.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-bold text-2xl text-primary">2025</span>
                </div>
                <div className="flex-1 pl-6">
                  <h3 className="font-semibold text-xl mb-2">Continued Growth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, WESPA represents over 50 countries and 10,000+ active players, hosting more than 100
                    sanctioned tournaments annually across six continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT SECTION (Original Code) */}
      <section className="section-spacing bg-muted/30">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-bold text-3xl mb-4">Global Impact</h2>
            <p className="text-muted-foreground leading-relaxed">
              WESPA's reach extends across continents, uniting diverse communities through the shared language of
              Scrabble.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="rounded-lg bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">50+ Countries</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Member associations spanning Africa, Asia, Europe, North America, Oceania, and South America.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="rounded-lg bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">100+ Tournaments</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Annual sanctioned events ranging from local competitions to world championships.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="rounded-lg bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">10,000+ Players</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Active competitive players tracked in our global rating system across all skill levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION (Original Code) */}
      <section className="section-spacing">
        <div className="container-width">
          <h2 className="font-bold text-3xl mb-8 text-center">Our Partners</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
              Partner Logo
            </div>
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
              Partner Logo
            </div>
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
              Partner Logo
            </div>
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
              Partner Logo
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}