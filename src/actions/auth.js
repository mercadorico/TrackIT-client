import * as api from '../api/index';

export const signin = (formData, navigate) => async (dispatch) => {
    try {

        const { data } = await api.signin(formData);

        dispatch({type: 'AUTH', data});

        navigate('/');
    } catch (error) {
        console.log(error);
        dispatch({type: 'ERROR', data: error.response.data.message})
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);

        dispatch({type: 'AUTH', data});

        navigate('/');
    } catch (error) {
        console.log(error);
        dispatch({type: 'ERROR', data: error.response.data.message})
    }
}