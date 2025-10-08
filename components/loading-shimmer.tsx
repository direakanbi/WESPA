import type React from "react"
export function LoadingShimmer({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-muted rounded ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
    </div>
  )
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <LoadingShimmer className="h-12 w-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <LoadingShimmer className="h-4 w-3/4" />
            <LoadingShimmer className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-border p-6 space-y-4">
      <LoadingShimmer className="h-6 w-3/4" />
      <LoadingShimmer className="h-4 w-full" />
      <LoadingShimmer className="h-4 w-5/6" />
      <div className="flex gap-2 mt-4">
        <LoadingShimmer className="h-8 w-20" />
        <LoadingShimmer className="h-8 w-20" />
      </div>
    </div>
  )
}

export function EmptyState({
  title = "No data available",
  description = "There is currently no data to display.",
  icon,
}: {
  title?: string
  description?: string
  icon?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="rounded-full bg-muted p-6 mb-4">
        {icon || (
          <svg
            className="h-12 w-12 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        )}
      </div>
      <h3 className="font-serif font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-md leading-relaxed">{description}</p>
    </div>
  )
}
