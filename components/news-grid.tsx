"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardSkeleton, EmptyState } from "@/components/loading-shimmer"

// Mock news data
const mockNews = [
  {
    id: 1,
    title: "2025 World Championship Dates Announced",
    category: "Announcements",
    date: "2025-01-15",
    excerpt:
      "WESPA is excited to announce that the 2025 World Scrabble Championship will take place in London from November 15-22. Registration opens March 1st.",
    type: "article",
  },
  {
    id: 2,
    title: "Updated Tournament Rules for 2025",
    category: "Rule Updates",
    date: "2025-01-10",
    excerpt:
      "Important updates to tournament regulations including time controls and challenge procedures. All tournament directors should review these changes.",
    type: "pdf",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Youth Program Expansion to South America",
    category: "Community",
    date: "2025-01-05",
    excerpt:
      "WESPA's youth initiative is expanding with new programs launching in Brazil, Argentina, and Chile, bringing competitive Scrabble to thousands of young players.",
    type: "article",
  },
  {
    id: 4,
    title: "Official Word List 2025 Edition",
    category: "Resources",
    date: "2024-12-20",
    excerpt:
      "The updated official word list is now available for download. This edition includes 500+ new words and updated definitions.",
    type: "pdf",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "African Championship Results",
    category: "Tournament News",
    date: "2024-12-15",
    excerpt:
      "Congratulations to Wellington Jighere for winning the 2024 African Championship in Lagos. Full standings and game records now available.",
    type: "article",
  },
  {
    id: 6,
    title: "Tournament Director Certification Program",
    category: "Resources",
    date: "2024-12-01",
    excerpt:
      "New online certification program for aspiring tournament directors. Learn the skills needed to organize and run WESPA-sanctioned events.",
    type: "article",
  },
]

export function NewsGrid() {
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState(mockNews)
  const [displayCount, setDisplayCount] = useState(6)

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 6)
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (news.length === 0) {
    return <EmptyState title="No news found" description="Try adjusting your search or filter criteria." />
  }

  const displayedNews = news.slice(0, displayCount)

  return (
    <>
      <div className="space-y-6">
        {displayedNews.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge>{item.category}</Badge>
                  {item.type === "pdf" && (
                    <Badge variant="outline" className="gap-1">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      PDF
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="font-serif text-2xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">{item.excerpt}</p>
              <div className="flex gap-2">
                {item.type === "pdf" ? (
                  <Button variant="default" size="sm" asChild>
                    <a href={item.downloadUrl} download>
                      <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download
                    </a>
                  </Button>
                ) : (
                  <Button variant="default" size="sm" asChild>
                    <a href={`/news/${item.id}`}>
                      Read More{" "}
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {displayCount < news.length && (
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}

      <div className="mt-8 flex items-center justify-center">
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          Last updated • {new Date().toLocaleDateString()}
        </p>
      </div>
    </>
  )
}
