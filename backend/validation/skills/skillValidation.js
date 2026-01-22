import z from 'zod';

export const createSkillSchema = z.object({
  name: z.string().min(2, { message: "Skill name must be at least 2 characters" }),
  level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"], { message: "Level must be BEGINNER, INTERMEDIATE, or ADVANCED" }),
}).strict();