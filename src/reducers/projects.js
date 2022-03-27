const projectsReducer = (projects = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_PROJECTS':
            return action.payload;
        case 'CREATE':
            return [projects, action.payload];
        case 'DELETE':
            return projects.filter((project) => project._id !== action.payload);
        case 'SELECT_PROJECT':
            return action.payload;
        default:
            return projects;
    }
}

export default projectsReducer;