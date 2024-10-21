const baseUrl = import.meta.env.baseUrl ?? "http://localhost:3000";
const endpoint = {
    projects: `${baseUrl}/v1/projects`,
}

export { baseUrl, endpoint as endpoints };