import axios from 'axios';

const url = 'http://localhost:5000/projects';

export const fetchProjects = () => axios.get(url);
export const createProject = (newProject) => axios.post(url, newProject);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);
export const selectProject = (id) => axios.get(`${url}/${id}`);
export const updateProject = (id, project) => axios.patch(`${url}/${id}`, project);

export const fetchBugsByProject = (id) => axios.get(`${url}/${id}/bugs`);
export const reportBug = (id, newBug) => axios.post(`${url}/${id}/bugs`, newBug);
export const selectBug = (project_id, id) => axios.get(`${url}/${project_id}/bugs/${id}`);
export const deleteBug = (project_id, id) => axios.delete(`${url}/${project_id}/bugs/${id}`);