import axios from 'axios';
import store from '../index.js';

// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({ baseURL: 'https://track-bug.herokuapp.com' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    // increment loading state every request
    store.dispatch({type: 'LOADING'});
    
    return req;
}, (error) => {
    store.dispatch({type: 'LOADING'});
    return Promise.reject(error);
})

API.interceptors.response.use((res) => {
    // increment loading state every request
    store.dispatch({type: 'LOADED'});

    return res
}, (error) => {
    store.dispatch({type: 'LOADED'});
    return Promise.reject(error);
});

export const fetchProjects = () => API.get('/projects');
export const createProject = (newProject) => API.post('/projects', newProject);
export const deleteProject = (id) => API.delete(`/projects/${id}`);
export const selectProject = (id) => API.get(`/projects/${id}`);
export const updateProject = (id, project) => API.patch(`/projects/${id}`, project);

export const fetchBugsByProject = (id) => API.get(`/projects/${id}/bugs`);
export const reportBug = (id, newBug) => API.post(`/projects/${id}/bugs`, newBug);
export const selectBug = (project_id, id) => API.get(`/projects/${project_id}/bugs/${id}`);
export const deleteBug = (project_id, id) => API.delete(`/projects/${project_id}/bugs/${id}`);
export const updateBug = (project_id, id, updatedBug) => API.patch(`/projects/${project_id}/bugs/${id}`, updatedBug);

export const signin = (formData) => API.post('/users/signin', formData);
export const signup = (formData) => API.post('/users/signup', formData);
