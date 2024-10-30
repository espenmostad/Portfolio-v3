import { projectSchema } from "../../lib/validate";
import { Project } from "../types/projects.types";

export type DbProject = {
    id: string;
    title: string;
    category: string;
    description: string;
    url: string | null;
    is_public: string;
    created_at: string;
    published_at: string;
};

export const fromDb = (project: DbProject) => {
    return projectSchema.parse({
        id: project.id,
        title: project.title,
        category: project.category,
        description: project.description,
        url: project.url ?? null,
        createdAt: project.created_at,
        published_at: project.published_at,
        isPublic: project.is_public === "true"
    });
};

export const toDb = (project: Project) => {
    return {
        id: project.id,
        title: project.title,
        category: project.category,
        description: project.description,
        url: project.url,
        is_public: project.is_public.toString(),
        created_at: project.created_at?.toString(),
        published_at: project.published_at?.toString()
    };
};