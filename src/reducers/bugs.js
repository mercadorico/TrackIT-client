const bugsReducer = (bugs = [], action) => {
    switch (action.type) {
        case 'GET_BUGS_BY_PROJECT':
            return action.payload;
        case 'REPORT_BUG':
            return [...bugs, action.payload];
        case 'DELETE_BUG':
            return bugs.filter((bug) => bug._id !== action.payload );
        case 'UPDATE_BUGS_LIST':
            return bugs.map((bug) => {
                if(bug._id === action.payload._id) {
                    return {...bug, ...action.payload};
                } else {
                    return bug;
                }
            });
        case 'RESET_BUG_LIST':
            return [];
        default:
            return bugs;
    }
}

export default bugsReducer;