import DarkHero  from "@/components/DarkHero";
import React from "react";
import { rankings } from "@/lib/dummyData"; // Import the data
import RankingsTable from "@/components/rankings-table"; // Import the new table
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SearchIcon,
  CheckCircle2Icon,
  ZapIcon,
  GlobeIcon,
  TrophyIcon,
  FilterIcon,
  StarIcon,
} from "lucide-react";

// Breadcrumb links for the hero component
const links = [
  { name: "Home", href: "/" },
  { name: "Ratings", href: "/ratings" },
  { name: "OTB Ratings", href: "#" },
];

export default function OTBPage() {
  return (
    <main>
      {/* Section 1: Hero (FIXED) */}
      <DarkHero
        heading="Official OTB Ratings"
        text="Official global Scrabble player ratings (Over-the-Board)."
        links={links}
      />

      {/* Section 2: Table & Filters */}
      <section className="container-width section-spacing">
        <RankingsTable rankings={rankings} />
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" className="px-6 py-3 text-[#47b2e4] border-[#47b2e4]">
            Apply for Ratings
          </Button>
          <Button className="px-6 py-3">View Full Rankings</Button>
        </div>
      </section>

      {/* Section 3: About the Ratings */}
      <section className="bg-black text-white py-16">
        <div className="container-width">
          <h2 className="text-4xl font-bold text-center mb-8">
            About the Ratings
          </h2>
          <div className="max-w-3xl mx-auto text-lg space-y-6">
            <p>
              The WESPA Ratings Officer updates the{" "}
              <a href="/ratings/otb_ratings#" className="text-white font-bold">
                ratings file
              </a>{" "}
              using the latest results of approved tournaments. Rankings are
              given to those who have played in the past two years and have
              reached 50 games in WESPA-rated tournaments.
            </p>
            <p>
              Players who have played less frequently will have a larger Rating
              Deviation upon return. This results in larger rating changes per
              game won/lost/drawn.
            </p>
            <p>
              The improved WESPA Rating System, also known as RJR system, has
              been in operation since 1 January 2025. It rates past data dating
              back to 1 January 2006.
            </p>
            <p>
              The full list of players is not only available as a text file; if
              you are looking to search for a specific player (including
              yourself), our search tool below can assist.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Find A Player */}
      <section className="section-spacing container-width text-center">
        <h2 className="text-4xl font-bold mb-4">Find A Player</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Search global players, view their stats, and explore their game
          history.
        </p>
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Enter player name..."
              className="w-full pr-10 py-2 border rounded-full"
            />
            <SearchIcon className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 bg-[#47b2e4] text-white p-1 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-35">
          <div className="flex items-start space-x-4 justify-center">
            <CheckCircle2Icon className="h-8 w-8 text-primary" />
            <p className="text-base font-medium max-w-[150px] text-left">
              Verified player stats from WESPA
            </p>
          </div>
          <div className="h-24 w-px bg-gray-700 mx-4 hidden md:block" /> {/* Divider */}
          <div className="flex items-start space-x-4 justify-center">
            <ZapIcon className="h-8 w-8 text-primary" />
            <p className="text-base font-medium max-w-[200px] text-left">
              Real-time updates after every tournament
            </p>
          </div>
          <div className="h-24 w-px bg-gray-700 mx-4 hidden md:block" /> {/* Divider */}
          <div className="flex items-start space-x-4 justify-center">
            <GlobeIcon className="h-8 w-8 text-primary" />
            <p className="text-base font-medium max-w-[200px] text-left">
              Discover players from across the globe
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Find A Country */}
      <section className="text-center bg-[#eaf5fe] py-24">
        <h2 className="text-4xl font-bold mb-4 text-[#47b2e4]">Find A Country</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how active players from each nation rank by rating and
          performance.
        </p>
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Enter country name..."
              className="w-full pr-10 py-2 border rounded-full bg-white"
            />
            <SearchIcon className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 bg-[#47b2e4] text-white p-1 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-35">
          <div className="flex items-start space-x-4 justify-center">
            <img
              src="/icons/bronze.svg"
              alt="Active player rankings"
              className="h-10 w-10"
            />
            <p className="text-base font-medium max-w-[200px] text-left">
              Active player rankings by country
            </p>
          </div>
          <div className="h-24 w-px bg-gray-700 mx-4 hidden md:block" /> {/* Divider */}
          <div className="flex items-start space-x-4 justify-center">
            <GlobeIcon className="h-8 w-8 text-primary" />
            <p className="text-base font-medium max-w-[150px] text-left">
              Dynamic global leaderboard
            </p>
          </div>
          <div className="h-24 w-px bg-gray-700 mx-4 hidden md:block" /> {/* Divider */}
          <div className="flex items-start space-x-4 justify-center">
            <SearchIcon className="h-8 w-8 text-primary" />
            <p className="text-base font-medium max-w-[150px] text-left">
              Interactive search for instant stats
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Find A Tournament */}
      <section
        className="relative py-24 text-white"
        style={{
          backgroundImage: "url('/images/tiles-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/20 pointer-events-none" style={{zIndex: 1}} />
        <div className="container-width text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Find A Tournament</h2>
          <p className="text-lg text-muted-foreground mb-8">
            You can obtain information on previous tournaments here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <span className="text-lg">Between</span>
            <Select>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="2008"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2008">2008</SelectItem>
                <SelectItem value="2009">2009</SelectItem>
                <SelectItem value="2010">2010</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-lg">and</span>
            <Select>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-lg">in</span>
            <Select>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Germany" className="bg-white"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="us">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full pr-10 py-2 border rounded-full bg-white"
              />
              <SearchIcon className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 bg-[#47b2e4] text-white p-1 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-35">
            <div className="flex items-start space-x-4 justify-center">
              <TrophyIcon className="h-8 w-8 text-primary" />
              <p className="text-base font-medium max-w-[200px] text-left">Explore Global Tournaments</p>
            </div>
            <div className="h-24 w-px bg-gray-700 mx-4 hidden md:block" /> {/* Divider */}
            <div className="flex items-start space-x-4 justify-center">
              <FilterIcon className="h-8 w-8 text-primary" />
              <p className="text-base font-medium max-w-[200px] text-left">Filter by Country or Year</p>
            </div>
            <div className="h-24 w-px bg-gray-700 mx-4 hidden md:block" /> {/* Divider */}
            <div className="flex items-start space-x-4 justify-center">
              <StarIcon className="h-8 w-8 text-primary" />
              <p className="text-base font-medium max-w-[200px] text-left">Discover Prestigious Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Terms of Use */}
      <section className="section-spacing container-width text-muted-foreground">
        <h2 className="text-4xl font-bold text-center text-foreground mb-8">
          TERMS OF USE
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg">
          <p>
            You may use the Website and/or Content solely for your own individual
            non-commercial and informational purposes. Any other use, including
            for any commercial purpose, is strictly prohibited without WESPA's
            express prior written permission. Systematic retrieval of data or
            other Content from the Website, including but not limited to scores,
            statistics, and/or rankings, whether to create or compile, directly
            or indirectly, a collection, compilation, database, or directory, is
            prohibited absent prior express written permission from WESPA.
          </p>
          <p>
            You also agree not to access and/or use the Website content that:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              (a) constitutes an advertisement or solicitation of business,
              chain letters, or pyramid schemes;
            </li>
            <li>
              (b) contains or constitutes software, computer programs, viruses,
              bots, worms, or spiders;
            </li>
            <li>
              (c) collects information about others, including but not limited
              to users' e-mail addresses;
            </li>
            <li>
              (d) imposes an unreasonable load on the Website's infrastructure;
              and/or
            </li>
            <li>
              (e) reverse engineers or decompiles the software comprising the
              Website.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

