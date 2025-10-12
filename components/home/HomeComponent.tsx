import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/images/wespa_logo.svg";
import about_logo from "../../public/images/about_logo.jpg";
import { ArrowRight, Trophy, Star, Earth, FileText, Users, Globe2, BookText } from 'lucide-react';

// Types
interface Player {
  id: number;
  name: string;
  country: string;
  ranking: number;
  image: string;
}

interface MembershipTier {
  icon: React.ReactNode;
  price: string;
  country: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export default function HomePage() {
  // Sample data
  const topPlayers: Player[] = [
    { id: 1, name: 'David Eldar', country: 'Australia', ranking: 1, image: '/player1.jpg' },
    { id: 2, name: 'Nigel Richards', country: 'New Zealand', ranking: 2, image: '/player2.jpg' },
    { id: 3, name: 'Player Name', country: 'Country', ranking: 3, image: '/player3.jpg' },
    { id: 4, name: 'Player Name', country: 'Country', ranking: 4, image: '/player4.jpg' },
    { id: 5, name: 'Alec Sjoholm', country: 'USA', ranking: 5, image: '/player5.jpg' },
  ];

  const membershipTiers: MembershipTier[] = [
    { icon: <Earth className="w-8 h-8" />, price: '16', country: 'Africa', },
    { icon: <Earth className="w-8 h-8" />, price: '16', country: 'Asia'},
    { icon: <Earth className="w-8 h-8" />, price: '16', country: 'Europe' },
    { icon: <Earth className="w-8 h-8" />, price: '16', country: 'America'},
    { icon: <Earth className="w-8 h-8" />, price: '16', country: 'Australia'},
    { icon: <Globe2 className="w-8 h-8" />, price: '16', country: 'Multiple'},
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top books for inspiration',
      excerpt: 'To create better docs examples that developers can understand.',
      image: '/blog1.jpg',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Top books for inspiration',
      excerpt: 'Resource search docs explains everything you need to get started.',
      image: '/blog2.jpg',
      date: '2024-01-14'
    },
    {
      id: 3,
      title: 'Top books for inspiration',
      excerpt: 'Exclusive music docs example that developers can listen.',
      image: '/blog3.jpg',
      date: '2024-01-13'
    },
    {
      id: 4,
      title: 'Top books for inspiration',
      excerpt: 'Explains music docs example that developers can understand.',
      image: '/blog4.jpg',
      date: '2024-01-12'
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm bg-gray-100  w-fit py-2 px-4 rounded-full md:text-base text-black font-medium">Welcome to</p>
              <Image src={logo} alt="Home page Logo" priority className=" w-72 py-6"/>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                The World English-language Scrabble Players Association (WESPA) is the global framework for competitive Scrabble, uniting national federations through shared rules and ratings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/membership" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
                >
                  Become a Member
                </Link>
                <Link 
                  href="/tournaments" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary  text-primary rounded-lg font-medium transition-colors"
                >
                  View upcoming tournaments
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-md aspect-square relative">
                {/* Placeholder for globe - can be replaced with actual globe component */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
                  <Globe2 className="w-32 h-32 text-cyan-600 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickLinkCard
              icon={<Trophy className="w-8 h-8 text-primary" />}
              title="Tourneys"
              description="Browse and register for Scrabble tournaments"
              href="/tournaments"
            />
            <QuickLinkCard
              icon={<Star className="w-8 h-8 text-primary" />}
              title="Ratings"
              description="Check player rankings in our global ratings system"
              href="/ratings"
            />
            <QuickLinkCard
              icon={<BookText className="w-8 h-8 text-primary" />}
              title="Rules"
              description="Official rulebook for rules and regulations"
              href="/rules"
            />
            <QuickLinkCard
              icon={<FileText className="w-8 h-8 text-primary" />}
              title="Guidelines"
              description="Essential policies for officially approved events"
              href="/guidelines"
            />
          </div>
        </div>
      </section>

      {/* About WESPA Section */}
      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <Image src={about_logo} alt="Logo "/>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                About WESPA
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The World English-language Scrabble Players Association (WESPA) is the global framework for competitive Scrabble, uniting national federations through shared rules and ratings.
                </p>
                <p>
                  It supports a wide range of international events, from local tournaments to world championships. WESPA ensures that the spirit of Scrabble thrives and grows as a truly global game.
                </p>
              </div>
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
              >
                Read More WESPA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Pathways Section - Dark */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-orange-400">
                Membership Pathways
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Connect with the global Scrabble community as a federation, an individual or a supporter
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {membershipTiers.map((tier, index) => (
                <MembershipCard key={index} {...tier} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Players Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
                WESPA Top Players
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Honouring WESPA's champions and rising stars shaping the Scrabble world.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                {topPlayers.map((player) => (
                  <PlayerCard key={player.id} {...player} />
                ))}
              </div>
              <div className="text-center">
                <Link 
                  href="/players" 
                  className="inline-flex items-center px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
                >
                  Official Ratings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Pathways Section - Light */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
                Membership Pathways
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connect with the global Scrabble community as a federation, an individual or a supporter
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MembershipPathwayCard
                icon={<Users className="w-12 h-12 text-primary" />}
                title="National Association"
                description="Membership available if your country has a national association affiliated with WESPA and you fulfill certain eligibility conditions."
              />
              <MembershipPathwayCard
                icon={<Globe2 className="w-12 h-12 text-primary" />}
                title="WESPA +"
                description="Open to all, enjoy family plans, flexible through renewals, connect with the global players, and your own rating."
              />
              <MembershipPathwayCard
                icon={<Users className="w-12 h-12 text-primary" />}
                title="Friends of Wespa"
                description="Support the WESPA by donating, you don't get tournament ratings but you get recognized and always belong."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
                Latest Updates from Wespa
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay informed with the latest news, announcements, and developments from the global WESPA community.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
            <div className="text-center">
              <Link 
                href="/news" 
                className="inline-flex items-center px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
              >
                Get updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Component: Quick Link Card
function QuickLinkCard({ icon, title, description, href }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  href: string;
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:-translate-y-1">
        <div className="p-3 rounded-xl">
          {icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">{description}</p>
        <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400 transition-colors">
          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white" />
        </button>
      </div>
    </Link>
  );
}

// Component: Membership Card
function MembershipCard({ icon, price, country }: MembershipTier) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
      <div className="text-orange-400">
        {icon}
      </div>
      <div>
        <p className="text-3xl font-bold text-white">{price}</p>
        <p className="text-sm text-gray-400">{country}</p>
      </div>
      <button className="px-6 py-2 bg-transparent border border-gray-600 rounded-lg text-white hover:bg-gray-700 transition-colors text-sm font-medium">
        Details
      </button>
    </div>
  );
}

// Component: Player Card
function PlayerCard({ name, country, ranking, image }: Player) {
  return (
    <div className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
          {/* Placeholder for player image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <Users className="w-16 h-16" />
          </div>
        </div>
        <div className="p-4 text-center">
          <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-500">{country}</p>
          <p className="text-xs text-cyan-600 mt-2">#{ranking}</p>
        </div>
      </div>
    </div>
  );
}

// Component: Membership Pathway Card
function MembershipPathwayCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-cyan-50 rounded-xl">
          {icon}
        </div>
        <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 transition-colors group">
          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}

// Component: Blog Card
function BlogCard({ title, excerpt, image, date }: BlogPost) {
  return (
    <div className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
          {/* Placeholder for blog image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <FileText className="w-16 h-16" />
          </div>
        </div>
        <div className="p-5 space-y-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-cyan-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{excerpt}</p>
        </div>
      </div>
    </div>
  );
}