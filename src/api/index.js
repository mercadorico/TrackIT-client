import { API, LOAD } from "./interceptors";

export const fetchProjects = () => API.get('/projects');
export const createProject = (newProject) => API.post('/projects', newProject);
export const deleteProject = (id) => API.delete(`/projects/${id}`);
export const selectProject = (id) => API.get(`/projects/${id}`);
export const updateProject = (id, project) => API.patch(`/projects/${id}`, project);

export const fetchBugsByProject = (project_id) => LOAD.get(`/projects/${project_id}/bugs`);
export const reportBug = (id, newBug) => API.post(`/projects/${id}/bugs`, newBug);
export const selectBug = (project_id, id) => API.get(`/projects/${project_id}/bugs/${id}`);
export const deleteBug = (project_id, id) => API.delete(`/projects/${project_id}/bugs/${id}`);
export const updateBug = (project_id, id, updatedBug) => API.patch(`/projects/${project_id}/bugs/${id}`, updatedBug);

export const signin = (formData) => LOAD.post('/users/signin', formData);
export const signup = (formData) => LOAD.post('/users/signup', formData);
