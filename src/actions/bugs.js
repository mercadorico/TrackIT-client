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

export const deleteBug = (project_id, id) => async (dispatch) => {
    try {
        await api.deleteBug(project_id, id);

        dispatch({type: 'DELETE_BUG', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const selectBug = (project_id, id) => async (dispatch) => {
    try {
        const { data } = await api.selectBug(project_id, id);

        dispatch({type: 'SELECT_BUG', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateBug = (project_id, id, updatedBug) => async (dispatch) => {
    try {
        const { data } = await api.updateBug(project_id, id, updatedBug);

        dispatch({type: 'UPDATE_BUG', payload: data});
    } catch (error) {
        console.log(error);
    }
}