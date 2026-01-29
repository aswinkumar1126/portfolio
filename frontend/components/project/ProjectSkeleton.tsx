import "animate.css"

const ProjectSkeleton = () => {
  return (
    <div
      className="
        rounded-xl
        border border-border
        bg-background
        p-6
        shadow-sm
        animate__animated animate__fadeIn
      "
    >
      {/* Title */}
      <div className="h-5 w-2/3 mb-4 rounded-md bg-muted shimmer" />

      {/* Description */}
      <div className="space-y-2 mb-6">
        <div className="h-3 w-full rounded-md bg-muted shimmer" />
        <div className="h-3 w-5/6 rounded-md bg-muted shimmer" />
        <div className="h-3 w-4/6 rounded-md bg-muted shimmer" />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="h-6 w-20 rounded-full bg-muted shimmer" />
        <div className="h-4 w-10 rounded-md bg-muted shimmer" />
      </div>
    </div>
  )
}

export default ProjectSkeleton
