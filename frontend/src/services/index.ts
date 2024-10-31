import { ofetch } from "ofetch/node";
import { ProjectProps } from "../components/types";
import { endpoints } from "../config/config";

const url = endpoints.projects;

export const getProjects = async (): Promise<ProjectProps[]> => {
    const projects = await ofetch(url);

    console.log(url);
    console.log(projects);
    //Validating the projects
    //projectsSchema.parse(projects);
    return projects;
};

export const createProject = async (project: ProjectProps) => {

    //Husk validering
    //projectSchema.parse(project);

    return ofetch(url, {
        method: "PUT",
        body: JSON.stringify(project),
        headers: {
            "Content-type": "application/json",
        },
    });
};

export const deleteProject = async (id: string) => {
    return ofetch(`${url}/${id}`, {
        method: "DELETE",
    })
}