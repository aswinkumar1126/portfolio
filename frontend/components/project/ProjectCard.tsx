import "animate.css"

interface Props {
  project: any
  index: number
}

const ProjectCard = ({ project, index }: Props) => {
  return (
    <div
      className={`
        animate__animated animate__fadeInUp
        rounded-xl border border-border
        bg-background
        p-6
        shadow-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-xl
      `}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <h3 className="text-xl font-semibold mb-2">
        {project.name}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {project.description || "No description provided."}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
          Active
        </span>

        <button className="text-sm font-medium text-primary hover:underline">
          View →
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
