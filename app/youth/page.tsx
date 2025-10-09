import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {GraduationCap, Calendar, MapPin} from "lucide-react"
import championshipImg from "../../public/scrabble_tournament.png"
import Image from "next/image"
import Link from "next/link"

export default function YouthPage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/young_people_playing.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto ">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance text-white">
              Empowering the Next Generation
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              WESPA's Youth Program nurtures young talent through coaching and competitions building a
              vibrant future for competitive Scrabble.
            </p>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 transition-colors">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className=" flex flex-col relative gap-5 py-16 px-4">
        <h1 className="text-center text-gray-600 text-2xl font-semibold ">20th Youth Scrabble Championship</h1>
        <section className="relative overflow-hidden group rounded-md">
           <Image
              src={championshipImg}
              alt="Image of people playing Scrabble"
              className="rounded-md w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center
                    opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500 ease-in-out rounded-md">
            <p className="text-lg font-semibold">August 30th – September 1st, 2025</p>
            <p className="text-base pt-8">Malaysia</p>
          </div>        
        </section>
        <ul className=" pt-3 pb-5 xp-5 flex flex-col gap-1 ">
          <li className=" flex gap-2 items-center"><MapPin size={20}/><span>Malaysia</span></li>
          <li className=" flex gap-2 items-center"><Calendar size={20}/><span>30th August - September 1st, 2025</span></li>
        </ul>
      </section>

      {/* Program Segments */}
      {/* <section className="section-spacing">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
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
                <h2 className="font-bold text-2xl mb-4">Youth Events</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dedicated tournaments and championships for players under 18, providing age-appropriate competition
                  and pathways to international events.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Annual Youth World Championship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Regional youth tournaments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>School championship programs</span>
                  </li>
                </ul>
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl mb-4">Coaching & Mentorship</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Connect young players with experienced coaches and mentors who provide guidance, strategy training,
                  and support for competitive development.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>One-on-one mentorship programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Online coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Training camps and workshops</span>
                  </li>
                </ul>
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl mb-4">Scholarships</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Financial support for talented young players to attend major tournaments, training programs, and
                  international competitions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tournament travel grants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Training program funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Equipment and resource support</span>
                  </li>
                </ul>
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl mb-4">Resources</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Comprehensive learning materials, study guides, and practice tools designed specifically for young
                  players developing their skills.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Word study guides and lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Strategy tutorials and videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Practice games and puzzles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

   

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="h-12 w-12 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
            </svg>
            <h2 className="font-bold text-3xl mb-4">Join the Youth Program</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're a young player looking to compete, a parent seeking opportunities for your child, or a
              coach wanting to contribute, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tournaments">View Youth Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
