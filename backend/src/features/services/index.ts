import db from "../../db/db";
import { createProjectRepository, ProjectRepository } from "../repository";
import { projectSchema } from "../../lib/validate";
import { Project } from "../types/projects.types";

// Function to create a project service
export const createProjectService = (projectRepository: ProjectRepository) => {
	return {
		create: (data: Project) => {
			return projectRepository.create(
				projectSchema.parse({
					...data,
					createdAt: new Date().toISOString(),
				})
			);
		},
		list: projectRepository.list,
		getById: projectRepository.getById,
		update: projectRepository.update,
		remove: projectRepository.remove,
		publish: projectRepository.publish,
		unpublish: projectRepository.unpublish,
	};
};

// Create a project service
export const projectService = createProjectService(createProjectRepository(db));

// Export the type of the project service
export type ProjectService = ReturnType<typeof createProjectService>;