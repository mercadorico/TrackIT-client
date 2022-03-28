const selectedProject = (selectedProject = {}, action) => {
    switch (action.type) {
        case 'SELECT_PROJECT':
            return action.payload;
        case 'RESET':
            return {};
        default:
            return selectedProject;
    }
}

export default selectedProject;