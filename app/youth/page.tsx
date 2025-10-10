import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {Mail, Calendar, MapPin} from "lucide-react";
import {FaWhatsapp} from "react-icons/fa";
import championshipImg from "../../public/scrabble_tournament.png"
import Image from "next/image";
import winner1 from "../../public/youth_winner1.jpg";
import winner2 from "../../public/youth_winner2.jpg";
import winner3 from "../../public/youth_winner3.jpg";
import youth_commitee from "../../public/tariq_pervez.jpg"
import Link from "next/link";
import WinnersTable from "@/components/youth_program/WinnersTable";

const winners = [
  {full_name:"Bilal Asher", country:"Pakistan",image:winner1, competition:"2nd HHS Youth International Scrabble Tournament"},
  {full_name:"Affan Salman", country:"Pakistan",image:winner2, competition:"World Youth Scrabble Championship 2024"},
  {full_name:"Hivin Dilmith", country:"Sri Lanka",image:winner3, competition:"WESPA Youth Cup 2023"},
]

export default function YouthPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/young_people_playing.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance text-white">
              Empowering the Next Generation
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              WESPA's Youth Program nurtures young talent through coaching and competitions building a
              vibrant future for competitive Scrabble.
            </p>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 transition-colors">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Championship Section */}
      <section className="flex flex-col relative gap-5 py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-center text-gray-600 text-2xl md:text-3xl lg:text-4xl font-semibold">
          20th Youth Scrabble Championship
        </h1>
        <section className="relative overflow-hidden group rounded-md max-w-4xl mx-auto w-full">
           <Image
              src={championshipImg}
              alt="Image of people playing Scrabble"
              className="rounded-md w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center
                    opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500 ease-in-out rounded-md px-4">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">August 30th – September 1st, 2025</p>
            <p className="text-base md:text-lg lg:text-xl pt-8">Malaysia</p>
          </div>        
        </section>
        <ul className="pt-3 pb-5 flex flex-col gap-2 max-w-4xl mx-auto w-full text-base md:text-lg">
          <li className="flex gap-2 items-center">
            <MapPin size={20} className="md:w-6 md:h-6"/>
            <span>Malaysia</span>
          </li>
          <li className="flex gap-2 items-center">
            <Calendar size={20} className="md:w-6 md:h-6"/>
            <span>30th August - September 1st, 2025</span>
          </li>
          <li className="font-semibold animate-pulse text-blue-500 hover:text-blue-600 transition-colors">
            <a href="https://scrabble.org.my/wysc2025/">More information</a>
          </li>
        </ul>
      </section>

      {/* Winners Section */}
      <div className="px-5 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <section className="mb-8">
          <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">Winners</span>
          <div className="w-20 md:w-24 h-[2px] bg-black/70 rounded-md mt-1"/>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16">
          {
            winners.map((winner,idx)=>{
              return(
                <div key={idx} className="flex flex-col gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h1 className="text-lg md:text-xl font-semibold min-h-[3rem] md:min-h-[3.5rem]">
                    {winner.competition}
                  </h1>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                    <Image 
                      src={winner.image} 
                      alt={winner.competition} 
                      className="w-full h-full object-cover" 
                      priority
                    />
                  </div>
                  <section className="text-sm md:text-base">
                    <p className="mb-1">
                      <span className="font-semibold">Winner: </span>
                      {winner.full_name}
                    </p>
                    <p>
                      <span className="font-semibold">Country: </span>
                      {winner.country}
                    </p>
                  </section>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Youth Committee Section */}
      <div className="mt-16 px-5 py-8 mx-5 md:mx-8 lg:mx-16 rounded-lg bg-gray-100 max-w-7xl lg:mx-auto">
        <section className="mb-6">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">WESPA Youth Committee</h1>
          <div className="w-24 md:w-32 h-[2px] bg-black/70 rounded-md mt-1"/>
        </section>
        <section className="md:flex md:gap-8 lg:gap-12 md:items-start">
          <div className="mb-6 md:mb-0 md:flex-shrink-0">
            <Image 
              src={youth_commitee} 
              priority 
              alt="Youth Committee Head Tariq Pervez" 
              className="rounded-md w-full md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
            />
          </div>
          <section className="flex flex-col gap-3 md:py-4">
            <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">Tariq Pervez</p>
            <p className="font-semibold text-lg md:text-xl lg:text-2xl text-gray-700">
              Chairman, WESPA Youth Committee
            </p>
            <section className="items-center pt-3 flex gap-5">
              <a 
                href="https://wa.link/3rb9w3" 
                className="text-2xl md:text-3xl lg:text-4xl text-green-600 hover:text-green-700 transition-colors"
                aria-label="Contact via WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:tariqp@gmail.com" 
                className="text-xl md:text-2xl lg:text-3xl text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Send email"
              >
                <Mail/>
              </a>
            </section>
          </section>
        </section>
      </div>   

      {/* History Section */}
      <section className="mt-10 pt-10 px-5 md:px-8 lg:px-16 border-t-2 border-gray-300 max-w-7xl mx-auto">
        <section className="flex flex-col gap-3 mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">History</h1>
          <article className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl">
            The WESPA Youth Cup (formerly the World Youth Scrabble Championship) has been contested every year since 2006. Previous WESPA Youth Cup and World Youth Scrabble Champions are listed below. However, there are many more prizes awarded, which you can see when you click the links to see the event coverage from the past.
          </article>
          <p className="mt-2 mb-3 bg-[#35b1d9] hover:bg-[#2a9dc4] px-4 py-2 w-fit rounded-md text-white transition-colors">
            <a 
              href="https://www.youthscrabble.org/2023%20Report.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium"
            >
              2023 Youth Committee Report
            </a>
          </p>
        </section>
        <div className="overflow-x-auto">
          <WinnersTable/>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center px-4">
            <svg className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
            </svg>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Join the Youth Program</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
              Whether you're a young player looking to compete, a parent seeking opportunities for your child or a
              coach wanting to contribute, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base md:text-lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base md:text-lg">
                <Link href="/tournaments">View Youth Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}