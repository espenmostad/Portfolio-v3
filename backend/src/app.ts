import { Hono } from "hono";
import { cors } from "hono/cors";
import { projectController } from "./features/controllers";

const app = new Hono();

app.use("/*", cors());

// Route to get all projects
app.route("/api/v1/projects", projectController);

export default app;