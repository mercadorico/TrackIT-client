const bugsReducer = (bugs = [], action) => {
    switch (action.type) {
        case 'GET_BUGS_BY_PROJECT':
            return action.payload;
        case 'REPORT_BUG':
            return [...bugs, action.payload];
        case 'DELETE_BUG':
            return bugs.filter((bug) => bug._id !== action.payload );
        default:
            return bugs;
    }
}

export default bugsReducer;