import * as api from '../api';

// Async Action Creators
export const fetchBugs = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchBugsByProject(id);

        dispatch({type: 'GET_BUGS_BY_PROJECT', payload: data});
    } catch (error) {
        console.log(error);
    }
}