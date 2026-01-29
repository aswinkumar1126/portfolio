"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { projectManagementService } from "@/frontend/service/projectManagement";

export const PROJECT_KEYS = {
  all: ["projects"] as const,
};

export const useGetProjects = () => {
  return useQuery({
    queryKey: PROJECT_KEYS.all,
    queryFn: () => projectManagementService.getProjects(),
  })
}
export const useCreateProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: projectManagementService.createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PROJECT_KEYS.all,
      })
    },
  })
}
export const useUpdateProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string
      data: any
    }) => projectManagementService.updateProject(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PROJECT_KEYS.all,
      })
    },
  })
}
export const useDeleteProject = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id:string) => projectManagementService.deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PROJECT_KEYS.all,
      })
    },
  })
}

