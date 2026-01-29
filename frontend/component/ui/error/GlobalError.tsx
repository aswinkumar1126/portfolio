"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: string 
  reset: () => void
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-2">
        Something went wrong 😕
      </h2>

      <p className="text-muted-foreground mb-6">
        {error}
      </p>

      <button
        onClick={reset}
        className="px-6 py-3 rounded-lg bg-primary text-white"
      >
        Try again
      </button>
    </div>
  )
}
