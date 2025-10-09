"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {ChevronDown} from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)
  const [calendarOpen, setCalendarOpen] = useState(false)


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white  ">
      <div className="container-width">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/rankings" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/wespa-logo.jpg" alt="WESPA" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>About</span>
                <ChevronDown size={20} color="gray"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/about" className="hover:text-primary">
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" className="hover:text-primary">
                    Associations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/committee" className="hover:text-primary">
                    Committees
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/committee" className="hover:text-primary">
                    Join Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/committee" className="hover:text-primary">
                    Credits
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/rankings" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Ratings
            </Link>

            <Link
              href="/tournaments"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Tournaments
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Community</span>
                <ChevronDown size={20} color={"gray"}/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/youth" className="hover:text-primary">
                    Youth Program
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/membership" className="hover:text-primary">
                    Membership
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Calendar</span>
                <ChevronDown size={20} color={"gray"}/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="#" className="hover:text-primary">
                    Tournaments Tiers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="hover:text-primary">
                    World Scrabble Championship (WSC)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="hover:text-primary">
                    World Team Scrabble Championship (WTSC)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="hover:text-primary">
                    WESPA Super-20 Championship 
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              News
            </Link>

            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-secondary text-white rounded-full px-6 transition-colors duration-200"
            >
              <Link href="/donate">Join WESPA</Link>
            </Button>
          </div>

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
              {/* About Section */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex justify-between w-full text-left text-sm font-medium py-2 hover:text-primary transition-colors"
                >
                  <span>About</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/about" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      About Us
                    </Link>
                    <Link href="/associations" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Associations
                    </Link>
                    <Link href="/committee" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Committees
                    </Link>
                    <Link href="/join" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Join Us
                    </Link>
                    <Link href="/credits" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Credits
                    </Link>
                  </div>
                )}
              </div>

              {/* Ratings */}
              <Link href="/rankings" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Ratings
              </Link>

              {/* Tournaments */}
              <Link href="/tournaments" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Tournaments
              </Link>

              {/* Community Section */}
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
                    <Link href="/youth" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Youth Program
                    </Link>
                    <Link href="/membership" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Membership
                    </Link>
                  </div>
                )}
              </div>

              {/* Calendar Section */}
              <div>
                <button
                  onClick={() => setCalendarOpen(!calendarOpen)}
                  className="flex justify-between w-full text-left text-sm font-medium py-2 hover:text-primary transition-colors"
                >
                  <span>Calendar</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${calendarOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {calendarOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="#" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Tournament Tiers
                    </Link>
                    <Link href="#" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      World Scrabble Championship
                    </Link>
                    <Link href="#" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      World Team Scrabble Championship
                    </Link>
                    <Link href="#" className="block hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      WESPA Super-20 Championship
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/news" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                News
              </Link>

              <Link href="/contact" className="block text-sm font-medium hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              <Button
                asChild
                className="w-full bg-primary hover:bg-secondary rounded-full transition-colors duration-200 mt-4"
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
