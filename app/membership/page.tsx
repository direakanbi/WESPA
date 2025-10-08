import { MembershipForm } from "@/components/membership-form"
import { Card, CardContent } from "@/components/ui/card"

export default function MembershipPage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/world-map-global-network-connections.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance">Membership Application</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join WESPA and become part of the global Scrabble community. National associations and organizations are
              invited to apply for membership.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-background">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl mb-8 text-center">Membership Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Official Recognition</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Gain official WESPA recognition and representation in global governance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Tournament Sanctioning</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Host WESPA-sanctioned tournaments with official rating points.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Player Development</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Access training resources, coaching programs, and youth initiatives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Global Network</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Connect with associations worldwide and participate in international events.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <MembershipForm />
          </div>
        </div>
      </section>
    </main>
  )
}
