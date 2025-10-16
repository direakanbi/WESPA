"use client";
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import logo from "../../public/images/wespa_logo.svg";
import blog1 from "../../public/newspaper-news-updates-information-digital-media.jpg";
import blog2 from "../../public/newspaper-news-updates-information.jpg";
import blog3 from "../../public/newspaper-news-updates-information.jpg";
import people_playing from "../../public/images/people_playing.png"
import { ArrowRight, Trophy, Star, Earth, FileText, Users, Globe2, BookText, ChevronRight, Globe } from 'lucide-react';
import {CiGlobe} from "react-icons/ci"
import Flags from './Flags';

import { FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa';
import {FaEarthOceania} from "react-icons/fa6"
import TopPlayers from './TopPlayers';

// Types


interface MembershipTier {
  icon: React.ReactNode;
  price: string;
  country: string;
}

interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  image: StaticImageData;
  date: string;
}

interface CountriesProps {
  icon:React.ReactNode;
  country:string;
  value:number;
}

export default function HomePage() {
  // Sample data


// FAQ Data
const faqs = [
  "How is WESPA different from national scrabble associations?",
  "What are the benefits of being a WESPA member?",
  "Can I play in WESPA tournaments if I'm not a member yet?",
  "How does one WESPA rating system work?",
  "Are there really no membership fees with WESPA?"
];

  const quickLinks = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Tourneys",
      description: "Browse and register for Scrabble tournaments",
      href: "/tournaments",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Ratings",
      description: "Check player rankings in our global ratings system",
      href: "/ratings",
    },
    {
      icon: <BookText className="w-8 h-8 text-primary" />,
      title: "Rules",
      description: "Official rulebook for rules and regulations",
      href: "/rules",
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Guidelines",
      description: "Essential policies for officially approved events",
      href: "/guidelines",
    },
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
      image: blog1,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Top books for inspiration',
      excerpt: 'Resource search docs explains everything you need to get started.',
      image: blog2,
      date: '2024-01-14'
    },
    {
      id: 3,
      title: 'Top books for inspiration',
      excerpt: 'Exclusive music docs example that developers can listen.',
      image: blog3,
      date: '2024-01-13'
    },
    {
      id: 4,
      title: 'Top books for inspiration',
      excerpt: 'Explains music docs example that developers can understand.',
      image: blog1,
      date: '2024-01-12'
    },
  ];

  const continents:CountriesProps[]  = [
    {value:16, country:"Africa",icon:<FaGlobeAfrica/>},
    {value:6, country:"Asia",icon:<FaGlobeAsia/>},
    {value:8, country:"Europe",icon:<FaGlobeEurope/>},
    {value:12, country:"America",icon:<FaGlobeAmericas/>},
    {value:10, country:"Antarctica",icon:<FaEarthOceania/>},
    {value:13, country:"Australia",icon:<CiGlobe/>},
  ]


  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-[url(/images/tiles-images.svg)] md:py-6  overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Image src={logo} alt="Home page Logo" priority className=" w-72 py-6"/>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                The World English-language Scrabble Players Association (WESPA) is the global framework for competitive Scrabble, uniting national federations through shared rules and ratings.
              </p>
              <Link 
                  href="/membership" 
                  className=" items-center py-2 w-fit text-primary text-sm md:text-base  font-medium transition-colors flex"
                >
                  <span>Learn More</span><ChevronRight size={25} className=""/>
              </Link>
            </div>

            {/* Placeholder for globe */}

            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-md aspect-square relative">
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <Globe2 className="w-32 h-32 text-primary opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
 {/* Quick Links Section */}
        <section className="py-16 md:py-8 ">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 py-10 sm:py-0 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, i) => (
                <QuickLinkCard
                  key={i}
                  icon={link.icon}
                  title={link.title}
                  description={link.description}
                  href={link.href}
                />
              ))}

            </div>
          </div>
        </section>
      </section>

     
      {/* Scrabble without Borders */}
      <section className=" bg-black py-24 px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className=" flex flex-col gap-5">
          <section  className=' text-white flex flex-col gap-5 '>
            <p className=' text-2xl lg:text-4xl '>Scrabble Without Borders</p>
            <article className=" text-sm text-gray-100">With 40 member nations and over 50 annual tournaments, WESPA unites plyers globally, fosters international competition and celebrates the games growth</article>
            <Link href="/membership" className=" w-fit flex gap-2 items-center "><span>Members</span><ChevronRight/></Link>
          </section>
          <Flags/>
        </div>
        <Image src={people_playing} alt="People playing scrabble" className=" rounded-md  "/>
      </section>


      {/* WESPA events across continents */}
      <section className="py-16 md:py-24 bg-gray-100 ">
        <div className="flex flex-col justify-center items-center text-center mb-12">
          <h1 className="text-2xl lg:text-3xl font-semibold text-primary">
            WESPA Events across Continents
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Explore WESPA's global footprint of competitive Scrabble.
          </p>
        </div>

        <section className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-200 bg-gray-100">
          {continents.map((continent, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-3 py-10 text-center"
            >
              <div className="text-5xl text-gray-900">{continent.icon}</div>

              <p className="text-lg md:text-2xl font-semibold text-gray-800">
                {continent.value}{" "}
                <span className="text-gray-500 text-base font-normal">Tourneys</span>
              </p>

              <Link
                href="#"
                className="px-4 py-1 text-sm font-medium text-white bg-blue-400 rounded-full"
              >
                {continent.country}
              </Link>
            </div>
          ))}
        </section>
      </section>


      {/* Top Players Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-primary">
                WESPA Top Players
              </h2>
              <p className="text-gray-600 max-w-2xl text-sm mx-auto">
                Honouring WESPA's champions and rising stars shaping the Scrabble world.
              </p>
            </div>
            <TopPlayers/>
          </div>
        </div>
      </section>

        {/* Latest Updates Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-cyan-600">
                Latest Updates from WESPA
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay informed with the latest news, announcements, and developments from the global WESPA community.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} excerpt={post.excerpt} date={post.date} title={post.title} image={post.image} id={post.id} />
              ))}
            </div>
            <div className="text-center"> 
              <Link 
                href="/news" 
                className="inline-flex items-center px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Join Friends of WESPA */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 space-y-6">
              <h2 className="text-3xl md:text-5xl">
                Join Our Friends of WESPA Programme
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Help us grow the game worldwide. Whether you're a player, a fan, or simply love Scrabble, your support keeps our community thriving globally.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Link 
                  href="/friends" 
                  className="px-8 py-3 bg-gray-600/80 text-white rounded-lg font-medium transition-colors"
                >
                  Support Us
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-3 border-2 border-gray-600 hover:border-cyan-500 text-white rounded-lg font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-700 to-gray-800 relative">
                  <Image 
                    src={people_playing} 
                    alt="Community hands together" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-cyan-600">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Start here for quick answers about membership, events, and the global WESPA scrabble community.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq} />
              ))}
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
      <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col  space-y-4 ">
        <div className="p-3 rounded-xl">
          {icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">{description}</p>
        <p className="text-primary gap-3 border-gray-300 flex items-center  ">
          <span className=" text-lg ">Explore</span> 
          <ChevronRight className="w-5 h-5 " />
        </p>
      </div>
    </Link>
  );
}

// Component: FAQs
function FAQItem({ question }: { question: string }) {
  return (
    <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-5 transition-all cursor-pointer border border-gray-200">
      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-medium text-sm md:text-base pr-4">{question}</p>
        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 transform rotate-90" />
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
        <div className="p-4  rounded-xl">
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
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
          {/* Placeholder for blog image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <Image src={image} alt={"Blog Image"} className="w-full object-cover" />
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