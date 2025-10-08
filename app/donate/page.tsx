import { DonationForm } from "@/components/donation-form"
import { Card, CardContent } from "@/components/ui/card"

export default function DonatePage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hands-together-community-support-teamwork.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance text-white">Friends of WESPA</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Support the global Scrabble community and help us promote competitive play, develop youth programs, and
              maintain our worldwide infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl mb-8 text-center">Your Impact</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Youth Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fund scholarships, training programs, and youth tournaments that nurture the next generation of
                    Scrabble champions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Tournament Support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enable world-class tournaments, provide prize funds, and support tournament directors and organizers
                    globally.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <h3 className="font-bold text-xl mb-2">Global Infrastructure</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Maintain rating systems, digital platforms, and resources that connect players across 50+ countries.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Community Growth</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Support new associations, provide training materials, and expand Scrabble to underserved regions
                    worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-spacing bg-muted/30">
        <div className="container-width">
          <div className="max-w-2xl mx-auto">
            <DonationForm />
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-3xl mb-8 text-center">Donor Recognition</h2>
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <p className="text-center text-muted-foreground leading-relaxed mb-6">
                  We deeply appreciate the generosity of our supporters. Donors contributing $100 or more annually will
                  be recognized on our website (with permission) and receive exclusive updates about WESPA programs and
                  initiatives.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">$25</div>
                    <div className="text-xs text-muted-foreground">Supporter</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">$100</div>
                    <div className="text-xs text-muted-foreground">Friend</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">$500</div>
                    <div className="text-xs text-muted-foreground">Patron</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">$1000+</div>
                    <div className="text-xs text-muted-foreground">Champion</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-muted/30">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-3xl mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Is my donation tax-deductible?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    WESPA is a registered non-profit organization. Donations may be tax-deductible depending on your
                    country's regulations. Please consult with a tax professional for specific guidance.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How will my donation be used?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Donations support youth programs, tournament infrastructure, rating systems, and global outreach
                    initiatives. We publish an annual report detailing how funds are allocated.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can I make a recurring donation?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! You can choose to make your donation recurring on a monthly or annual basis. This provides
                    stable funding for our ongoing programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can I donate in honor or memory of someone?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Absolutely. Please include their name in the donation form notes, and we'll acknowledge your tribute
                    appropriately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
