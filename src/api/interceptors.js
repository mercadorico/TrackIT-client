import axios from 'axios';
import store from '../index.js';

// const API = axios.create({ baseURL: 'http://localhost:5000' });
export const API = axios.create({ baseURL: 'https://track-bug.herokuapp.com' });
export const LOAD = axios.create({ baseURL: 'https://track-bug.herokuapp.com' });

// send JWT info during request to authorize each request to the API.
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    
    return req;
}, (error) => {
    store.dispatch({type: 'LOADING'});
    return Promise.reject(error);
});

// Interceptors for loading state. Used for specific requests like fetchBugs, signin, and signup
LOAD.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    // increment loading state every request
    store.dispatch({type: 'LOADING'});

    return req;
}, (error) => {
    store.dispatch({type: 'LOADING'});
    return Promise.reject(error);
});

LOAD.interceptors.response.use((res) => {
    // increment loading state every request
    store.dispatch({type: 'LOADED'});

    return res
}, (error) => {
    store.dispatch({type: 'LOADED'});
    return Promise.reject(error);
});

