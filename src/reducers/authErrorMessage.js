const authErrorMessage = (state = null, action) => {
    switch (action.type) {
        case 'ERROR':
            return action.data;
        case 'RESET_ERROR':
            return null;
        default:
            return null;
    }
}

export default authErrorMessage;