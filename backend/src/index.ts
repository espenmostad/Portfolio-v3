import { serve } from '@hono/node-server'
import { readFile, writeFile } from "node:fs/promises";
import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { UUID } from 'node:crypto';

type Project = {
	id: UUID;
	title: string;
	description: string;
  category: string;
	created: Date;
};

const app = new Hono()

app.use("/*", cors());

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/projects", async (c: { json: (arg0: any) => any; }) => {
  const data = await readFile("./src/data.json", "utf-8");
  //return c.json(data);
  return c.json(JSON.parse(data));
  //return c.json({"id": 1});
});

app.put("/projects", async (c) => {
	const data = await readFile("./src/data.json", "utf-8");
	const projects = JSON.parse(data);
	const project = await c.req.json() as Project;

	project.created = new Date();
	projects.push(project);
	await writeFile(
		"./src/data.json",
		JSON.stringify(projects, null, 2)
	);
	return c.json(project);
	
});

app.delete("/projects/:id", async (c) => {
	const id = c.req.param("id");
	const data = await readFile("./src/data.json", "utf-8");
	const projects = JSON.parse(data) as Project[];
	console.log(projects);
	const newProjects = projects.filter(
		(project: Project) => project.id !== id
	);
	console.log(newProjects);
	await writeFile(
		"./src/data.json",
		JSON.stringify(newProjects, null, 2)
	);
	return c.json({ message: "Project deleted" });
});

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
