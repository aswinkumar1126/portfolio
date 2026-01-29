"use client"

import Image from "next/image"
import "animate.css"

interface LoaderProps {
  loading: boolean
  text?: string
}

const Loader = ({ loading, text = "Processing..." }: LoaderProps) => {
  if (!loading) return null

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-6 animate__animated animate__fadeIn">
      <Image
        src="/logo.png" // your logo / image
        alt="Loading"
        width={48}
        height={48}
        className="animate-spin"
      />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  )
}

export default Loader
