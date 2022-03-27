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
        const { data } = await api.createProject(project);

        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteProject = (id) => async (dispatch) => {
    try {
        await api.deleteProject(id);

        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const selectProject = (id) => async (dispatch) => {
    try {
        const {data} = await api.selectProject(id);

        dispatch({type: 'SELECT_PROJECT', payload: [data]});
    } catch (error) {
        console.log(error);
    }
}