// app/about/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe2, Trophy, BookText, Users, Star, Shield, Award, User } from 'lucide-react';

// Replace these with actual images from your public folder
const collageImage = '/images/scrabble-collage.png'; // or use your own
const worldMapImage = '/images/world-map-scrabble.png';

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section – "WESPA at a Glance" */}
      {/* Hero Section - "WESPA at a Glance" - Updated for Large Overlapping Image */}
      <section className="relative bg-black text-white py-20 md:py-32 min-h-[600px]"> {/* Kept min-h for debugging */}
        {/* Background pattern/image overlay */}
        <Image
          src="/images/tiles-hero.png"
          alt="Background pattern"
          fill
          className="absolute inset-0 z-0" // Using Image component for background
          ref={(el) => {
            if (el) {
              console.log('About Page Hero Background Image:', window.getComputedStyle(el).backgroundImage);
            }
          }}
        />
        <div className="container-width relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">WESPA at a Glance</h1>
            <p className="text-xl text-gray-300 mb-8">Connecting players, associations, and organisers worldwide.</p>
            <div className="inline-flex items-center px-4 py-1 bg-blue-600/30 rounded-full text-sm font-medium">
              SINCE 2003
            </div>
          </div>

          {/* Collage Image Container - Made relative for absolute positioning */}
          <div className="relative h-[550px] md:h-[650px] rounded-3xl shadow-2xl z-50"> {/* Increased z-index to z-50 */}
            {/* Collage Image - Positioned absolutely at bottom, extending into next section */}
            <Image
              src={collageImage} // e.g., '/images/scrabble-collage.jpg'
              alt="Players enjoying Scrabble worldwide"
              fill
              className="object-cover top-[800px]" // Pushed image down by another 200px
            />
          </div>
        </div>
      </section>

      {/* The Global Body Section - Pulled up to overlap with Hero Image */}
      <section className="py-20 bg-white -mt-32 md:-mt-48 relative z-10">
        <div className="container-width pt-20"> {/* Reverted padding-top to previous position */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The global body for English-language Scrabble competition and fair play.
              </h2>
            </div>
            <div className="text-gray-600 space-y-6">
              <p>
                Since its founding in 2003, WESPA has united more than 40 national associations under a shared vision for competitive Scrabble. Through our federations, individual members, and supporters, we have built a truly global community connected by standardised rules, ratings, and tournaments.
              </p>
              <p>
                Each year, WESPA supports over 50 sanctioned events across continents, providing players with recognition, fair competition, and pathways to international championships. In 2022, we expanded opportunities by lifting restrictions on sanctioned tournaments, giving organisers more freedom to host events while maintaining global standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WESPA Framework Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">WESPA Framework</h2>
            <p className="text-gray-600">WESPA supports tournaments, players, and organisers, while setting international standards for Scrabble.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <BookText className="w-8 h-8 text-primary" />,
                title: "Rules & Standards",
                desc: "Ensuring fair play and consistent rules worldwide.",
                link: "/rules",
                label: "WESPA Rules >"
              },
              {
                icon: <Trophy className="w-8 h-8 text-primary" />,
                title: "Tournaments & Ratings",
                desc: "Running tournaments and maintaining global ratings.",
                link: "/ratings",
                label: "Official Ratings >"
              },
              {
                icon: <Star className="w-8 h-8 text-primary" />,
                title: "Development & Growth",
                desc: "Growing the game through players and associations.",
                link: "/resources",
                label: "Resources >"
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Community",
                desc: "Building a united & recognised Scrabble community.",
                link: "/community",
                label: "Associations >"
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  </div>
                  <Link href={item.link} className="text-primary text-sm font-semibold hover:underline">
                    {item.label}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* A Global Connection Section */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">A Global Connection</h2>
            <p className="text-gray-600">Bridging continents through the universal language of words</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">United by Words, Connected by Passion</h3>
              <p className="text-gray-600">
                WESPA brings together Scrabble enthusiasts from every corner of the globe. From bustling tournaments in Asia to intimate clubs in Europe, from championship events in Africa to community gatherings in the Americas—we are the thread that connects diverse cultures through competitive wordplay.
              </p>
              <p className="text-gray-600">
                Our mission is to promote fair play, foster excellence, and ensure that every player, regardless of location or background, has access to world-class competition and resources.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: <Globe2 className="w-5 h-5 text-primary" />, title: "Global Reach", desc: "Federations on 6 continents" },
                  { icon: <Shield className="w-5 h-5 text-primary" />, title: "Fair Play", desc: "Unified rules & ratings" },
                  { icon: <Award className="w-5 h-5 text-primary" />, title: "Excellence", desc: "World-class standards" },
                  { icon: <Users className="w-5 h-5 text-primary" />, title: "Community", desc: "Inclusive & welcoming" }
                ].map((item, i) => (
                  <Card key={i} className="bg-gray-50 p-4">
                    <div className="flex items-start gap-2">
                      <div>{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={worldMapImage}
                alt="Global Scrabble connections"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">WESPA Executive Committee</h2>
            <p className="text-gray-600">
              The WESPA Committee governs the association’s operations, setting international standards, shaping policies, and safeguarding the integrity of competitive Scrabble worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jason Broersma", role: "Treasurer", flag: "/flags/canada.webp" },
              { name: "Chris Lipe", role: "Chair Person", flag: "/flags/usa.webp" },
              { name: "Carol Johnsen", role: "Secretary", flag: "/flags/australia.webp" }
            ].map((member, i) => (
              <div key={i} className="text-center hover:shadow-sm transition-shadow duration-200 h-[320px] w-[260px] mx-auto bg-white rounded-lg">
                {/* Changed: Use flex-col, allow headshot area to grow/shrink, align items start (left) */}
                <div className="p-0 flex flex-col h-full">
                  {/* Headshot container - Takes fixed height */}
                  <div className="relative w-full h-[240px] flex-shrink-0">
                    <Image
                      src="/images/fake_player3.jpg"
                      alt={member.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    {/* Flag Icon - Bigger, with white background */}
                    <div className="absolute bottom-1 left-1 w-10 h-10 rounded-md overflow-hidden bg-white flex items-center justify-center"> {/* Increased size to w-10 h-10, added bg-white and flex centering */}
                      <Image
                        src={member.flag}
                        alt={`${member.name}'s country`}
                        fill // Use fill to let the Image component manage the size within the parent div
                        className="object-cover" // Maintain object-cover for the flag image itself
                      />
                    </div>
                  </div>

                  {/* Text Block - Positioned directly below the headshot container, aligned left */}
                  <div className="text-left px-4 py-3 flex-grow flex flex-col justify-center"> {/* Added flex-grow and flex-col justify-center */}
                    <div className="font-semibold text-base text-gray-900">{member.name}</div>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/committee" className="text-primary text-sm font-medium hover:underline">
              View all Members →
            </Link>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Global Impact</h2>
            <p className="text-gray-300">Connecting players, associations, and organisers worldwide.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe2 className="w-8 h-8 text-orange-400" />,
                title: "50+ Countries",
                desc: "Member associations spanning Africa, Asia, Europe, North America, Oceania, and South America."
              },
              {
                icon: <Trophy className="w-8 h-8 text-orange-400" />,
                title: "100+ Tournaments",
                desc: "Annual sanctioned events ranging from local competitions to world championships."
              },
              {
                icon: <Users className="w-8 h-8 text-orange-400" />,
                title: "10,000+ Players",
                desc: "Active competitive players tracked in our global rating system across all skill levels."
              }
            ].map((item, i) => (
              <Card key={i} className="bg-gray-900 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-20 w-32 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-500">
                Partner Logo
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}