const loadingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'LOADING':
            return state + 1;
        case 'LOADED':
            return state - 1;
        default:
            return state;
    }
}

export default loadingReducer;