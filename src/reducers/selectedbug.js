const selectedBug = (bug = [], action) => {
    switch (action.type) {
        case 'SELECT_BUG':
            return action.payload;
        default:
            return bug;
    }
}

export default selectedBug;