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

export const reportBug = (id, newBug) => async (dispatch) => {
    try {
        const { data } = await api.reportBug(id, newBug);

        dispatch({type: 'REPORT_BUG', payload: data});
    } catch (error) {
        console.log(error);
    }
}