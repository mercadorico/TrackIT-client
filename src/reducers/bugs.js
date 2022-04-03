const bugsReducer = (bugs = [], action) => {
    switch (action.type) {
        case 'GET_BUGS_BY_PROJECT':
            return action.payload;
        default:
            return bugs;
    }
}

export default bugsReducer;