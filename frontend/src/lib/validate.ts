import { z } from "zod";

// Zod validation schema for a project
const projectSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    category: z.union([z.string(), z.array(z.string())]),
    description: z.string(),
    url: z.string().optional(),
    is_public: z.boolean().optional(),
    created_at: z.string().transform((str) => new Date(str)).optional(),
    published_at: z.string().transform((str) => new Date(str)).optional(),
});

const projectsSchema = z.array(projectSchema);

export { projectSchema, projectsSchema };