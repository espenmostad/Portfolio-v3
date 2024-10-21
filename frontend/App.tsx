import "/src/css/App.css";
import Contact from "./src/components/Contact"
import ContactForm from "./src/components/ContactForm"
import Experiences from "./src/components/Experiences"
import Header from "./src/components/Header" 
import { ExperienceProps, ProjectProps } from "./src/components/types";
import { useEffect, useState } from "react";
import { ofetch } from "ofetch";
import Projects from "./src/components/Projects";
import ProjectForm from "./src/components/ProjectForm";
import Presentation from "./src/components/Presentation";
import { useProjects } from "./src/hooks/useProjects";

const student = 'Halgeir Geirson'
const degree = 'Bachelor IT'
const points = 180
const experiences: ExperienceProps[] = [
  { id: 1, description: "Figma UI for customer X" },
  { id: 2, description: "Website for customer Y" },
];

const email = 'student@hiof.no'

function App() {
  console.log("Email in App:", email);  // Debug log
  //const [projectsList, setProjectsList] = useState<ProjectProps[]>([]);
  const { projectsList, handleOnCreateProjectButtonClicked } = useProjects();

  // const readDataFromApi = () => {
	// 	console.log("fetching data");
	// 	ofetch("http://localhost:3000/projects")
	// 		.then((projects: ProjectProps[]) => {
	// 			console.log("data fetched");
	// 			setProjectsList(projects);
	// 			console.log("data initialized");
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching projects:", error);
	// 		});
	// };
	// useEffect(() => {
	// 	readDataFromApi();
	// }, []);


  const handleOnCreateNewProjectButtonClicked = async (
    title: string,
    description: string,
    category: string
  ) => {
    console.log("Project created: ", title, description, category);
    const project = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      category: category,
      created: Date(),
    };
  
    console.log(project);
  
    try {
      const response = await ofetch("http://localhost:3000/projects", {
        method: "PUT",  // Change to POST for creating new resources
        body: JSON.stringify(project),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.message);
  
      // Instead of refetching all the data, directly update the projectsList state
      setProjectsList((prevProjects) => [...prevProjects, project]);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

    const handleOnRemoveProjectButtonClicked = (id: string) => {
      console.log("Project removed: ", id);
      ofetch(`http://localhost:3000/projects/${id}`, { method: "DELETE" })
        .then((response: { message: string }) => {
        console.log(response.message);
        setProjectsList((projectsList) =>
          projectsList.filter((project) => project.id !== id)
        );
        })
        .catch((error) => {
        console.error("Error deleting project:", error);
        });
    };

  return (
    <div className="grid-container">
      <Header student={student} degree={degree} points={points} email={email} />
      <main>
        <Presentation student={student} degree={degree} points={points} email={email} experiences={undefined} />
        <Experiences experiences={experiences}>				
        </Experiences>
        
        <Projects
          projects={projectsList}
          onRemoveProjectButtonClicked={
            handleOnRemoveProjectButtonClicked
          }
        >
        </Projects>
        <ProjectForm
          onCreateNewProjectButtonClicked={
            handleOnCreateNewProjectButtonClicked
          }
        />
        <ContactForm />
      
      </main>
    </div>
  )
}

export default App