import axios from 'axios';

const url = 'http://localhost:5000/projects';

export const fetchProjects = () => axios.get(url);
export const createProject = (newProject) => axios.post(url, newProject);