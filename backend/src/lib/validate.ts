import { z } from "zod";

const projectSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    category: z.union([z.string(), z.array(z.string())]),
    is_public: z.boolean(),
    created_at: z.string(), // Already in ISO string format
    published_at: z.string() // Already in ISO string format
});

const projectsSchema = z.array(projectSchema);

export { projectSchema, projectsSchema };


// import { UUID } from "crypto";
// import { z } from "zod";

// const projectSchema = z.object({
//     id: z.string().uuid().transform((str) => str as UUID),
//     title: z.string(),
//     description: z.string(),
//     url: z.string().optional(),
//     category: z.union([z.string(), z.array(z.string())]),
//     is_public: z.boolean(),
//     created_at: z.string().datetime().transform((str) => new Date(str)),    
//     published_at: z.string().datetime().transform((str) => new Date(str)),
// });

// const projectsSchema = z.array(projectSchema);

// export { projectSchema, projectsSchema };