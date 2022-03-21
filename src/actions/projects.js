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