import { NewsGrid } from "@/components/news-grid"
import { NewsFilters } from "@/components/news-filters"

export default function NewsPage() {
  return (
    <main className="flex-1">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/newspaper-news-updates-information.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-balance">News & Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest news, rule updates, and downloadable resources from WESPA.
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="section-spacing">
        <div className="container-width">
          <NewsFilters />
          <NewsGrid />
        </div>
      </section>
    </main>
  )
}
