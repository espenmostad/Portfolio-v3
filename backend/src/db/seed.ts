import { DB } from "./db";
import { readFile } from "fs/promises";
import { Project } from "../features/types/projects.types";
import { projectsSchema } from "../lib/validate";

export const seed = async (db: DB) => {
    const file = await readFile("src/data/data.json", "utf-8");
    
    // Parse and validate the projects data from JSON
    const projects = projectsSchema.parse(JSON.parse(file));
    console.log("Validated Projects:", projects); // Debug log to inspect parsed data
    
    // Prepare the SQL insert statement
    const insertProject = db.prepare(`
        INSERT INTO projects (id, title, description, url, category, is_public, created_at, published_at) 
        VALUES (@id, @title, @description, @url, @category, @is_public, @created_at, @published_at)`);

    // Use a transaction to insert each project
    const seedTransaction = db.transaction((projects: Project[]) => {
        for (const project of projects) {
            const tempProj = {
                ...project,
                is_public: project.is_public ? 1 : 0 // Convert boolean to integer
            };
            insertProject.run(tempProj);
        }
    });

    // Execute the transaction with the parsed projects
    seedTransaction(projects);
};

// import { DB } from "./db";
// import { readFile } from "fs/promises";
// import { Project } from "../features/types/projects.types";
// import { projectsSchema } from "../lib/validate";

// export const seed = async (db: DB) => {
//     const file = await readFile("src/data/data.json", "utf-8");
//     const projects = projectsSchema.parse(JSON.parse(file));
//     const insertProject = db.prepare(`
//         INSERT INTO projects (id, title, description, url, category, is_public, created_at, published_at) 
//         VALUES (@id, @title, @description, @url, @category, @is_public, @created_at, @published_at)`);

//     const seedTransaction = db.transaction((projects: Project[]) => {
        
//         for (const project of projects) {
//             //let tempProj = {...project,  isPublic: String(project.is_public), created_at: project.created_at?.toISOString(), published_at: project.published_at?.toISOString()};
//             let tempProj = {...project,  is_public: String(project.is_public), created_at: project.created_at?.toISOString(), published_at: project.published_at?.toISOString()};
//             insertProject.run(tempProj);
//         }
//     });

    
//     seedTransaction(projects);
// };