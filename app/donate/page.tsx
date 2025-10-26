"use client";

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

function DonationForm() {
  const [amount, setAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const presetAmounts = ['25', '50', '100', '250', '500'];

  return (
    <Card className="shadow-lg">
      <CardContent className="p-8">
        <h2 className="font-bold text-2xl mb-6 text-center">Make Your Donation</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3">Donation Frequency</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFrequency('one-time')}
                className={`py-3 px-4 rounded-lg font-medium transition-all ${
                  frequency === 'one-time'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                className={`py-3 px-4 rounded-lg font-medium transition-all ${
                  frequency === 'monthly'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Select Amount</label>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => {
                    setAmount(preset);
                    setCustomAmount('');
                  }}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    amount === preset && !customAmount
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  ${preset}
                </button>
              ))}
              <button
                onClick={() => setAmount('custom')}
                className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                  amount === 'custom'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                Custom
              </button>
            </div>
            {amount === 'custom' && (
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Personal Information</label>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg">
            Donate ${amount === 'custom' ? (customAmount || '0') : amount} {frequency === 'monthly' ? '/month' : ''}
          </button>

          <p className="text-xs text-center text-muted-foreground">
            Secure payment processing. Your information is protected.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DonatePage() {
  return (
    <main className="flex-1">
      <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hands-together-community-support-teamwork.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/70 to-black/60" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-3xl">
            
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance text-white drop-shadow-lg">
              Friends of WESPA
            </h1>
            <p className="text-xl text-white/95 mb-8 leading-relaxed max-w-2xl">
              Support the global Scrabble community and help us promote competitive play, develop youth programs, and
              maintain our worldwide infrastructure.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span>Tax-deductible donations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span>50+ countries worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span>Since 2004</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-spacing bg-gradient-to-b from-white to-muted/20">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              
              <h2 className="font-bold text-3xl md:text-4xl mb-4">Where Your Donation Goes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every contribution directly supports our mission to grow and strengthen the global Scrabble community
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="border-2 border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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

              <Card className="border-2 border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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

              <Card className="border-2 border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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

              <Card className="border-2 border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Recognition
              </span>
              <h2 className="font-bold text-3xl md:text-4xl mb-4">Donor Recognition</h2>
            </div>
            <Card className="shadow-lg border-2 border-primary/10 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="text-center text-muted-foreground leading-relaxed mb-8">
                  We deeply appreciate the generosity of our supporters. Donors contributing $100 or more annually will
                  be recognized on our website (with permission) and receive exclusive updates about WESPA programs and
                  initiatives.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-muted/50 border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="text-2xl font-bold text-primary mb-1">$25</div>
                    <div className="text-xs font-medium text-muted-foreground">Supporter</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="text-2xl font-bold text-primary mb-1">$100</div>
                    <div className="text-xs font-medium text-muted-foreground">Friend</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="text-2xl font-bold text-primary mb-1">$500</div>
                    <div className="text-xs font-medium text-muted-foreground">Patron</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="text-2xl font-bold text-primary mb-1">$1000+</div>
                    <div className="text-xs font-medium text-muted-foreground">Champion</div>
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
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                FAQ
              </span>
              <h2 className="font-bold text-3xl md:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              <Card className="shadow-sm hover:shadow-md border-l-4 border-l-primary/40 transition-all duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Is my donation tax-deductible?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    WESPA is a registered non-profit organization. Donations may be tax-deductible depending on your
                    country's regulations. Please consult with a tax professional for specific guidance.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md border-l-4 border-l-primary/40 transition-all duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How will my donation be used?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Donations support youth programs, tournament infrastructure, rating systems, and global outreach
                    initiatives. We publish an annual report detailing how funds are allocated.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md border-l-4 border-l-primary/40 transition-all duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I make a recurring donation?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! You can choose to make your donation recurring on a monthly or annual basis. This provides
                    stable funding for our ongoing programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md border-l-4 border-l-primary/40 transition-all duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I donate in honor or memory of someone?</h3>
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