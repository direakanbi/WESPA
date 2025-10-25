"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import logo from "../../public/images/wespa_logo.svg";
import scrabble_without_borders from "../../public/images/scrabble_without_borders.jpg";
import join_wespa_img from "../../public/images/join_wespa_img.png";
import join_scrabble_network from "../../public/images/join_scrabble_network.png";
import blog1 from "../../public/newspaper-news-updates-information-digital-media.jpg";
import blog2 from "../../public/newspaper-news-updates-information.jpg";
import blog3 from "../../public/newspaper-news-updates-information.jpg";
import { ArrowRight, Trophy, Star, Earth, FileText, Globe2, BookText, ChevronRight} from 'lucide-react';
import {CiGlobe} from "react-icons/ci"
import Flags from './Flags';
import { FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa';
import {FaEarthOceania} from "react-icons/fa6"
import TopPlayers from './TopPlayers';
import GlobalAnimation from '../globe-animation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';



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

  const {ref,inView} = useInView({
    triggerOnce:true,
    threshold:0.5
  })
// FAQ Data
const faqs = [
  {
    question: "How is WESPA different from national Scrabble associations?",
    answer:
      "WESPA is the global governing body for competitive Scrabble in English. While national associations manage and promote Scrabble within their own countries, WESPA connects those associations, standardizes rules, maintains international player ratings, and organizes world-level events.",
  },
  {
    question: "What are the benefits of being a WESPA member?",
    answer:
      "Membership connects you to a worldwide Scrabble community, gives you access to official WESPA ratings, opens the door to international tournaments, and provides resources and support for players and organizers alike.",
  },
  {
    question: "Can I play in a WESPA tournament if I'm not ranked yet?",
    answer:
      "Yes! New players are welcome. Your performance in your first rated event will earn you an initial WESPA rating.",
  },
  {
    question: "How often are WESPA ratings updated?",
    answer:
      "Ratings are updated shortly after each rated tournament, ensuring players always see their most current standings.",
  },
  {
    question: "Are there country rankings in WESPA?",
    answer:
      "Yes. WESPA tracks and publishes both individual player rankings and country rankings based on the performance of top players.",
  },
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
    {value:10, country:"Oceania",icon:<FaEarthOceania/>},
    {value:13, country:"Online",icon:<CiGlobe/>},
  ]


  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-[url(/images/tiles-images.svg)] md:py-6  overflow-hidden">
      <div className="container-width">
    <div className="w-full h-[400px] lg:h-[600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Logo + Text (now properly stacked) */}
      <div className="flex flex-col items-start">
        <Image 
          src={logo} 
          alt="WESPA Logo" 
          priority 
          className="w-72 mb-6" 
          // Remove pt/pb — use margin instead
        />
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mb-4">
          The World English-language Scrabble Players Association (WESPA) is the global framework for competitive Scrabble, uniting national federations through shared rules and ratings.
        </p>
        <Link 
          href="/membership" 
          className="flex items-center gap-2 text-primary text-sm md:text-base font-medium transition-colors"
        >
          <span>Learn More</span>
          <ChevronRight size={25} />
        </Link>
      </div>
            {/* Globe */}
            <div className="hidden lg:h-[400px] h-full lg:flex justify-center items-center">
              <GlobalAnimation />
            </div>
          </div>
        </div>
 {/* Quick Links Section */}
        <section className="py-16 md:py-8 ">
          <div className="container-width">
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
        <Image src={scrabble_without_borders} alt="People playing scrabble" className=" rounded-md  "/>
      </section>


      {/* WESPA events across continents */}
      <section className="py-16 md:py-24 bg-primary/10 ">
  <div className="flex flex-col justify-center items-center text-center mb-12">
    <h1 className="text-2xl lg:text-3xl text-primary">
      WESPA Events across Continents
    </h1>
    <p className="text-gray-600 text-sm mt-2">
      Explore WESPA's global footprint of competitive Scrabble.
    </p>
  </div>

  <section className="py-16 md:py-24 bg-primary/10">
  <div className="flex flex-col justify-center items-center text-center mb-12">
    <h1 className="text-2xl lg:text-3xl text-primary">
      WESPA Events across Continents
    </h1>
    <p className="text-gray-600 text-sm mt-2">
      Explore WESPA's global footprint of competitive Scrabble.
    </p>
  </div>

  {/* Use gap instead of divide */}
  <section ref={ref} className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:px-20">
    {continents.map((continent, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center gap-2 py-4 text-center border border-gray-300"
      >
        <div className="text-4xl text-gray-900">{continent.icon}</div>
        <p className="text-lg md:text-xl font-semibold text-gray-800">
          {inView ? (
            <CountUp start={0} end={continent.value} duration={2.5} separator="," />
          ) : (
            <span>0</span>
          )}{" "}
          <span className="text-gray-500 text-sm font-normal">Tourneys</span>
        </p>
        <Link
          href="#"
          className="px-3 py-1 text-xs md:text-sm font-medium text-white bg-primary rounded-full mt-1"
        >
          {continent.country}
        </Link>
      </div>
    ))}
  </section>
</section>
</section>


      {/* Top Players Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container-width">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-primary">
                WESPA Top 10 Players
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
              <h2 className="text-3xl md:text-5xl mb-4 text-primary">
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
                className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary text-white rounded-lg font-medium transition-colors"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Join The Global Scrabble Network */}
      <section className="py-20 md:py-24 bg-primary/10 text-primary">
        <div className="container lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative pb-14">
              <Image 
                src={join_scrabble_network} 
                alt="Community hands together" 
                className="w-full h-full object-cover"
              />
          </div>
          <div className=" lg:text-left text-center mb-10 space-y-6">
              <h2 className="text-2xl md:text-3xl">
                Join The Global Scrabble Network 
              </h2>
              <p className="text-gray-800 text-sm  md:text-base max-w-3xl mx-auto leading-relaxed">
                From national associations to individual players, everyone has a place at WESPA. By joining, you will tap into a global network that celebrates competitive Scrabble and brings players and organisers together across continents.
              </p>
              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <Link 
                  href="/friends" 
                  className="px-4 py-3 bg-primary text-white text-sm md:text-base rounded-lg  transition-colors"
                >
                  Support Us
                </Link>
                <Link 
                  href="/about" 
                  className="px-4 py-3 border-2 border-primary hover:border-primary text-primary text-sm md:text-base rounded-lg  transition-colors"
                >
                  Learn More
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
              <h2 className="text-2xl md:text-3xl">
                Join Our Friends of WESPA Program
              </h2>
              <p className="text-gray-300 text-sm  md:text-base max-w-3xl mx-auto leading-relaxed">
                Help us grow the game worldwide. Whether you're a player, a fan, or simply love Scrabble, your support keeps our community thriving globally.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Link 
                  href="/friends" 
                  className="px-4 py-3 bg-gray-600/80 text-white text-sm md:text-base rounded-lg  transition-colors"
                >
                  Support Us
                </Link>
                <Link 
                  href="/about" 
                  className="px-4 py-3 border-2 border-gray-600 hover:border-primary text-white text-sm md:text-base rounded-lg  transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-700 to-gray-800 relative">
                  <Image 
                    src={join_wespa_img} 
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
              <h2 className="text-2xl md:text-4xl  mb-4 text-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Start here for quick answers about membership, events, and the global WESPA Scrabble community.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
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
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-gray-50 hover:bg-gray-100 rounded-lg p-5 transition-all cursor-pointer border border-gray-200"
    >
      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-medium text-sm md:text-base pr-4">{question}</p>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{answer}</p>
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
        <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-hover hover:bg-hover transition-colors group">
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
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-hover transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{excerpt}</p>
        </div>
      </div>
    </div>
  );
}