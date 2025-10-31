import DarkHero from '@/components/DarkHero'
import React from 'react'
import Image from 'next/image';
import overview from "../../public/scrabble-tournament-players-competing.jpg";
import { Calendar, Trophy } from 'lucide-react';

const links =[
    {name:"Home",href:"/"},
    {name:"Rating",href:"/ratings"},
    {name:"WESPA Championship (WESPAC)",href:"#"},
]

const pastHosts = [
  { year: 2023, location: "United States", city: "Las Vegas, NV", venue: "Las Vegas", img: overview },
  { year: 2022, location: "United States", city: "Las Vegas, NV", venue: "Las Vegas", img: overview },
  { year: 2021, location: "United States", city: "Las Vegas, NV", venue: "Las Vegas", img: overview },
  { year: 2020, location: "United States", city: "Las Vegas, NV", venue: "Las Vegas", img: overview },
  { year: 2019, location: "United States", city: "Las Vegas, NV", venue: "Las Vegas", img: overview },
]

const pastChampions = [
  { year: 2023, name: "Nigel Richards", flag: "🇳🇿", img: overview },
  { year: 2022, name: "Nigel Richards", flag: "🇳🇿", img: overview },
  { year: 2021, name: "Nigel Richards", flag: "🇳🇿", img: overview },
  { year: 2020, name: "Nigel Richards", flag: "🇳🇿", img: overview },
  { year: 2019, name: "Nigel Richards", flag: "🇳🇿", img: overview },
  { year: 2018, name: "Nigel Richards", flag: "🇳🇿", img: overview },
]

function page() {
  return (
    <div>
        <DarkHero heading='WESPA Championship (WESPAC)' text="The pinnacle of global English-language Scrabble competition" links={links}/>
        
        <section className="py-16 bg-gray-50">
            <div className=" max-w-[1400px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Championship Overview
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                The WESPA Championship (WESPAC) is the premier biennial tournament that
                brings together the world's elite Scrabble players to compete for the
                ultimate title in English-language competitive Scrabble.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                Organized by the World English-language Scrabble Players Association,
                WESPAC showcases the highest level of strategic gameplay, lexical
                knowledge, and competitive excellence. Players from over 40 countries
                qualify through regional championships to earn their place at this
                prestigious event.
                </p>
                <p className="text-lg text-gray-700">
                The tournament features multiple rounds of intense competition, with the
                world's best players battling for supremacy and the honor of being
                crowned WESPA Champion.
                </p>

                {/* Badges */}
                <div className="flex gap-8 mt-8">
                <div className="flex items-center gap-2">
                    <Trophy/>
                    <div>
                        <div className="text-xl font-semibold">40+</div>
                        <div className="text-sm text-gray-500">Countries</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar/>
                    <div>
                    <div className="text-sm text-gray-500">Every 2 years</div>
                    <div className="text-xl font-semibold">Biennial</div>
                    </div>
                </div>
                </div>
            </div>

            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                src={overview}
                alt="WESPAC players"
                width={800}
                height={500}
                className="object-cover w-full h-full"
                />
            </div>
            </div>
        </section>

        {/* Past Host Locations */}
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
                Past Host Locations
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                WESPAC has traveled the globe, bringing world-class competition to diverse
                venues across continents.
            </p>

            {/* Horizontal scrollable cards */}
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
                {pastHosts.map((host) => (
                <div
                    key={host.year}
                    className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden snap-center"
                >
                    <div className="relative h-40">
                    <Image
                        src={host.img}
                        alt={`${host.year} host`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {host.year}
                    </div>
                    </div>
                    <div className="p-4">
                    <h3 className="font-semibold text-lg">{host.location}</h3>
                    <p className="text-sm text-gray-500">📍 {host.city}</p>
                    <p className="text-xs text-gray-400 mt-1">Venue: {host.venue}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Past Champions */}
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
                Past Champions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Celebrating the exceptional players who have claimed the WESPA Championship title.
            </p>

            {/* Grid layout for champions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {pastChampions.map((champ) => (
                <div
                    key={champ.year}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                    <div className="relative h-48">
                    <Image
                        src={champ.img}
                        alt={champ.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {champ.year}
                    </div>
                    </div>
                    <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{champ.name}</h3>
                    <p className="text-2xl mt-1">{champ.flag}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
      </section>
    </div>
  )
}

export default page