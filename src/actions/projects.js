import * as api from '../api';

// Async Action Creators
export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects();

        dispatch({type: 'FETCH_ALL_PROJECTS', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createProject = (project) => async (dispatch) => {
    try {
        const { data } = api.createProject(project);

        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}