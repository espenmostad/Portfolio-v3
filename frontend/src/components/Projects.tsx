import Project from "./Project";
import { ProjectProps, ProjectsProps } from "./types";
import type { PropsWithChildren } from "react";


export default function Projects(
	props: Readonly<PropsWithChildren<ProjectsProps>>
) {
	const {children, onRemoveProjectButtonClicked, projects } = props;
	return (
		<section className="projects">
			<h2>Projects</h2>
			{children}
			{projects.length === 0 ? (
				<p>No projects available.</p>
			) : (
				<>
					<ul className="projectlist">
						{projects.map((project: ProjectProps) => (
							<li key={project.id}>
								<Project
									id={project.id}
									title={project.title}
									description={project.description}
                                    category={project.category}
								>
									<button
										onClick={() =>
											onRemoveProjectButtonClicked(
												project.id
											)
										}
									>
										Remove project
									</button>
								</Project>
							</li>
						))}
					</ul>
                    <strong>Number of projects per category:</strong>
					<ul>
						{Object.entries(
							projects.reduce((prev, curr) => {
								prev[curr.category] =
									(prev[curr.category] || 0) + 1;
								return prev;
							}, {} as Record<string, number>)
						).map(([category, count]) => (
							<li key={category}>
								{category}: {count}
							</li>
						))}
					</ul>
				</>
			)}
		</section>
	);
}