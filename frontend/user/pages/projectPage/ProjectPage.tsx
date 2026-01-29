"use client"

import "animate.css"
import { useGetProjects } from "@/frontend/hook/projects/useProjectManagement"
import ProjectCard from "@/frontend/components/project/ProjectCard"
import ProjectSkeleton from "@/frontend/components/project/ProjectSkeleton"
import GlobalError from "@/frontend/component/ui/error/GlobalError"

export default function ProjectsPage() {
  const { data, isLoading, error ,refetch } = useGetProjects();

  console.log("Projects data:", data);

  // Loading state — show skeleton for page content
  if (isLoading) {
    return (
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <ProjectSkeleton key={i} />
        ))}
      </div>
    )
  }

  // Error state — use your GlobalError component
  if (error) {
    return <GlobalError reset={() => { refetch(); }} error={(error as Error).message} />
  }

  // Normal content
  return (
    <section className="px-10 py-14">
      {/* Header */}
      <div className="mb-10 animate__animated animate__fadeInDown">
        <h1 className="text-4xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="text-muted-foreground mt-2">
          Things you’ve been building 🚀
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data?.data?.map((project: any, index: number) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
