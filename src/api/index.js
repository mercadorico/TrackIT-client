import axios from 'axios';

const url = 'http://localhost:5000/projects';

export const fetchProjects = () => axios.get(url);
export const createProject = (newProject) => axios.post(url, newProject);
export const deleteProject = (id) => axios.delete(`${url}/${id}`);
export const selectProject = (id) => axios.get(`${url}/${id}`);
export const updateProject = (id, project) => axios.patch(`${url}/${id}`, project);