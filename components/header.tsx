"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {ChevronDown} from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State variables for mobile dropdowns, based on the document's structure
  const [aboutOpen, setAboutOpen] = useState(false)
  const [tournamentsOpen, setTournamentsOpen] = useState(false)
  const [ratingsOpen, setRatingsOpen] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className={`sticky top-0 z-50 w-full bg-white opacity-100 transition-all duration-300`}>
      <div className="container-width">
        <div className="flex h-16 items-center justify-between">
          
          {/* START: Group Logo and Navigation for controlled spacing (lg:gap-12) */}
          <div className="flex items-center lg:gap-12 lg:px-10"> 
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image src="/images/new-wespa-logo.png" alt="WESPA Logo" width={64} height={64} className=" w-16"/>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center justify-evenly gap-12`}>
              
              {/* HOME */}
              <Link href="/" className="text-sm font-medium tracking-px text-foreground hover:text-primary transition-colors">
                Home
              </Link>

              {/* ABOUT Dropdown - Regular Case */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-px text-foreground hover:text-primary transition-colors">
                  <span>About</span>
                  <ChevronDown size={20} color="gray"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="hover:text-primary">
                      WESPA
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/committee" className="hover:text-primary">
                      Our Committees
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/credits" className="hover:text-primary">
                      Credits
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* TOURNAMENTS Dropdown - Regular Case */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-px text-foreground hover:text-primary transition-colors">
                  <span>Tournaments</span>
                  <ChevronDown size={20} color="gray"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/calendar" className="hover:text-primary">
                      Calendar
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wespac" className="hover:text-primary">
                      WESPA Championship (WESPAC)
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/super-20" className="hover:text-primary">
                      SUPER-20 Championship
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wespa-open" className="hover:text-primary">
                      WESPA Open
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/tournament-tiers" className="hover:text-primary">
                      Tournament Tiers
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* RATINGS Dropdown - Regular Case */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-px text-foreground hover:text-primary transition-colors">
                  <span>Ratings</span>
                  <ChevronDown size={20} color="gray"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/ratings" className="hover:text-primary">
                      Ratings
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="/ratings/otb_ratings" className="hover:text-primary">
                      Official OTB Ratings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/ratings/online_ratings" className="hover:text-primary">
                      Online Ratings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/ratings/ytd_ranking" className="hover:text-primary">
                      Year-to-Date (YTD) Ranking
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* COMMUNITY Dropdown - Regular Case */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-px text-foreground hover:text-primary transition-colors">
                  <span>Community</span>
                  <ChevronDown size={20} color="gray"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/membership" className="hover:text-primary">
                      Membership
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/associations" className="hover:text-primary">
                      Associations
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/fow" className="hover:text-primary">
                      Friends of WESPA (FoW) Program
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/youth" className="hover:text-primary">
                      Youth Scrabble
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* RESOURCES Dropdown - Regular Case */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-px text-foreground hover:text-primary transition-colors">
                  <span>Resources</span>
                  <ChevronDown size={20} color="gray"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/wespac-bid" className="hover:text-primary">
                      WESPAC Bid Progress
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/organizers" className="hover:text-primary">
                      Information for Organizers
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/apply-rating" className="hover:text-primary">
                      Apply for Tournament Rating
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* NEWS - Regular Case */}
              <Link href="/news" className="text-sm font-medium tracking-px text-foreground hover:text-primary transition-colors">
                News
              </Link>
              
              {/* CONTACT - Regular Case */}
              <Link href="/contact" className="text-sm font-medium tracking-px text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          {/* END: Group Logo and Navigation for controlled spacing */}


          {/* <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              variant="gradient"
              className="rounded-full"
            >
              <Link href="/donate">Join WESPA</Link>
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              
              {/* HOME Mobile Link */}
              <Link href="/" className="block font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              {/* ABOUT Mobile Section - Regular Case */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex justify-between w-full text-left font-medium py-2 hover:text-primary transition-colors"
                >
                  <span>About</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/about" className=" block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      WESPA
                    </Link>
                    <Link href="/committee" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Our Committees
                    </Link>
                    <Link href="/credits" className=" block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Credits
                    </Link>
                  </div>
                )}
              </div>

              {/* TOURNAMENTS Mobile Section - Regular Case */}
              <div>
                <button
                  onClick={() => setTournamentsOpen(!tournamentsOpen)}
                  className="flex justify-between w-full text-left text-sm font-medium py-2 hover:text-primary transition-colors"
                >
                  <span>Tournaments</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${tournamentsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {tournamentsOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/calendar" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Calendar
                    </Link>
                    <Link href="/wespac" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      WESPA Championship (WESPAC)
                    </Link>
                    <Link href="/super-20" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      SUPER-20 Championship
                    </Link>
                    <Link href="/wespa-open" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      WESPA Open
                    </Link>
                    <Link href="/tournament-tiers" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Tournament Tiers
                    </Link>
                  </div>
                )}
              </div>
              
              {/* RATINGS Mobile Section - Regular Case */}
              <div>
                <button
                  onClick={() => setRatingsOpen(!ratingsOpen)}
                  className="flex justify-between w-full text-left text-sm font-medium py-2 hover:text-primary transition-colors"
                >
                  <span>Ratings</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${ratingsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {ratingsOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/ratings" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Rating
                    </Link>
                    <Link href="/ratings/otb_ratings" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Official OTB Ratings
                    </Link>
                    <Link href="/ratings/online_ratings" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Online Ratings
                    </Link>
                    <Link href="/ratings/ytd_ranking" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Year-to-Date (YTD) Ranking
                    </Link>
                  </div>
                )}
              </div>

              {/* COMMUNITY Mobile Section - Regular Case */}
              <div>
                <button
                  onClick={() => setCommunityOpen(!communityOpen)}
                  className="flex justify-between w-full text-left text-sm font-medium py-2 hover:text-primary transition-colors"
                >
                  <span>Community</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${communityOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {communityOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/membership" className=" text-sm block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Membership
                    </Link>
                    <Link href="/associations" className=" text-sm block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Associations
                    </Link>
                    <Link href="/fow" className=" text-sm block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Friends of WESPA (FoW) Program
                    </Link>
                    <Link href="/youth" className=" text-sm block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Youth Scrabble
                    </Link>
                  </div>
                )}
              </div>
              
              {/* RESOURCES Mobile Section - Regular Case */}
              <div>
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex justify-between w-full text-left text-sm font-medium py-2 hover:text-primary transition-colors"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/resources/wespac-bid" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      WESPAC Bid Progress
                    </Link>
                    <Link href="/resources/organizers" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Information for Organizers
                    </Link>
                    <Link href="/resources/apply-rating" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Apply for Tournament Rating
                    </Link>
                  </div>
                )}
              </div>
              
              {/* NEWS Mobile Link - Regular Case */}
              <Link href="/news" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                News
              </Link>
              
              {/* CONTACT Mobile Link - Regular Case */}
              <Link href="/contact" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              {/* Join WESPA Button */}
              <Button
                asChild
                variant="gradient"
                className="w-full mt-4 rounded-full"
              >
                <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                  Join WESPA
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}