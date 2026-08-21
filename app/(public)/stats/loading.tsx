export default function Loading() {
  return (
    <div className="px-4 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="h-28 w-28 shrink-0 rounded-2xl bg-muted animate-pulse sm:h-32 sm:w-32" />
          <div className="w-full max-w-md space-y-3">
            <div className="h-3 w-24 rounded bg-muted animate-pulse" />
            <div className="h-10 w-48 rounded bg-muted animate-pulse" />
            <div className="h-4 w-full rounded bg-muted animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-28 rounded-xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-muted animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
