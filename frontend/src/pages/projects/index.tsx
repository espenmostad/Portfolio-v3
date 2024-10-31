import { useProjects } from "../../hooks/useProjects";
import Projects from "../../components/Projects";
import ProjectForm from "../../components/ProjectForm";

const ProjectsPage = () => {
	const { projectsList, handleOnCreateProjectButtonClicked, handleOnRemoveProjectButtonClicked } = useProjects();
    
    return (
        <>
        <Projects projects={projectsList} onRemoveProjectButtonClicked={handleOnRemoveProjectButtonClicked} />
		<ProjectForm onCreateNewProjectButtonClicked={handleOnCreateProjectButtonClicked} />
        </>
        

    )
}

export default ProjectsPage;