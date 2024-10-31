import "/src/css/App.css";
import ProjectsPage from "./src/pages/projects";
// import { IntroPage } from "./features/intro/pages/index.tsx";
import Layout from "./src/components/Layout";
import Projects from "./src/components/Projects";
import ProjectForm from "./src/components/ProjectForm";




function App() {
	return (
		<Layout>
      <ProjectsPage />
      
		</Layout>
	);
}

export default App;