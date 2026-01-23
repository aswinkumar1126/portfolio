import z from 'zod';

const imageSchema = z.object({
  url: z.string().url("Invalid image URL"),
  altText: z.string().optional(),
  isCover: z.boolean().optional(),
});


const createProjectsSchema = z.object({
    name: z.string().min(1, "Project name is required"),
    description: z.string().min(1, "Project description is required"),
    link: z.string().url("Invalid URL format").optional(),
    technologies: z.array(z.string()).optional(),
    images: z.array(imageSchema).optional(),

}).strict();

const updateProjectsSchema = z.object({
    name: z.string().min(1, "Project name is required").optional(),
    description: z.string().min(1, "Project description is required").optional(),
    link: z.string().url("Invalid URL format").optional(),
    technologies: z.array(z.string()).optional(),
    images: z.array(imageSchema).optional(),

}).strict();

export { createProjectsSchema , updateProjectsSchema };