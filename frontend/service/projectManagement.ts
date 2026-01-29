import { mainService } from "./main/mainService";

export const projectManagementService = {
    getProjects: async <ResponseType = any>() => {
        return mainService<ResponseType>({
            url: '/projects',
            method: 'GET',
        });
    },
    createProject: async <ResponseType = any, BodyType = any>(data: BodyType) => {
        return mainService<ResponseType, BodyType>({
            url: '/projects',
            method: 'POST',
            data,
        });
    },
    updateProject: async <ResponseType = any, BodyType = any>(id: string, data: BodyType) => {
        return mainService<ResponseType, BodyType>({
            url: `/projects/${id}`,
            method: 'PUT',
            data,
        });
    },
    deleteProject: async <ResponseType = any>(id: string) => {
        return mainService<ResponseType>({
            url: `/projects/${id}`,
            method: 'DELETE',
        });
    },
};
