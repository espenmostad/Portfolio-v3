import { DB } from "../../db/db";
import { Project } from "../types/projects.types";
import { Result } from "../types/projects.types";
import { UUID } from "crypto";
import { DbProject, fromDb, toDb } from "../mappers";

export const createProjectRepository = (db: DB) => {
	// Function to create a project in the database
	const create = async (data: Project) => {
		try {
			const insertProject = db.prepare(`
                INSERT INTO projects (id, title, category, description, url, is_public, created_at, published_at) 
                VALUES (@id, @title, @category, @description, @url, @is_public, @created_at, @published_at)`);
			const insertTransaction = db.transaction((project: Project) => {
				insertProject.run(toDb(project));
			});
			insertTransaction(data);
			return { success: true, data };
		} catch (error) {
			console.log(error);
			const err: Result<Project> = {
				success: false,
				error: { code: "500", message: "Internal Server Error" },
			};
			return err;
		}
	};

	//Function to list all projects in the database
	const list = async () => {
		try {
			const projects = db
				.prepare("SELECT * FROM projects")
				.all() as DbProject[];
			const mappedProjects: Project[] = projects.map((project) =>
				fromDb(project)
			);
			const res: Result<Project[]> = { success: true, data: mappedProjects };
			return res;
		} catch (error) {
			const err: Result<Project[]> = {
				success: false,
				error: { code: "500", message: "Internal Server Error" },
			};
			return err;
		}
	};

	//Function to get a project by id
	const getById = async (id: UUID) => {
		try {
			const project = db
				.prepare("SELECT * FROM projects WHERE id = ?")
				.get(id) as DbProject;
			const mappedProject: Project = fromDb(project);
			return { success: true, data: mappedProject };
		} catch (error) {
			const err: Result<Project> = {
				success: false,
				error: { code: "404", message: "Project not found" },
			};
			return err;
		}
	};

	//Function to update a project
	const update = async (id: UUID, data: Project) => {
		try {
			const updateProject = db.prepare(`
                UPDATE projects 
                SET title = @title, category = @category, description = @description, url = @url, is_public = @is_public, published_at = @published_at
                WHERE id = @id
            `);

			const updateTransaction = db.transaction((project: Project) => {
				updateProject.run(toDb(project));
			});
			updateTransaction(data);
			return { success: true, data };
		} catch (error) {
			const err: Result<Project> = {
				success: false,
				error: { code: "500", message: "Internal Server Error" },
			};
			return err;
		}
	};

	//Function to remove a project
	const remove = async (id: UUID) => {
		try {
			db.prepare("DELETE FROM projects WHERE id = ?").run(id);
			return { success: true, data: null };
		} catch (error) {
			const err: Result<Project> = {
				success: false,
				error: { code: "400", message: "Error removing project" },
			};
			return err;
		}
	};

	//Function to publish a project, set publish to true
	const publish = async (id: UUID) => {
		try {
			db.prepare(
				"UPDATE projects SET is_public = 'true' WHERE id = ?"
			).run(id);
			return { success: true, data: null };
		} catch (error) {
			const err: Result<Project> = {
				success: false,
				error: { code: "500", message: "Internal Server Error" },
			};
			return err;
		}
	};

	//Function to unpublish a project, set publish to false
	const unpublish = async (id: UUID) => {
		try {
			db.prepare(
				"UPDATE projects SET is_public = 'false' WHERE id = ?"
			).run(id);
			return { success: true, data: null };
		} catch (error) {
			const err: Result<Project> = {
				success: false,
				error: { code: "500", message: "Internal Server Error" },
			};
			return err;
		}
	};

	return { create, list, getById, update, remove, publish, unpublish };
};

export type ProjectRepository = ReturnType<typeof createProjectRepository>;