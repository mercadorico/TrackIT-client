const selectedBug = (bug = {}, action) => {
    switch (action.type) {
        case 'SELECT_BUG':
            return action.payload;
        case 'RESET_SELECT_BUG':
            return {}
        default:
            return bug;
    }
}

export default selectedBug;