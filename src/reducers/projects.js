const projectsReducer = (projects = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_PROJECTS':
            return action.payload;
        case 'CREATE':
            return [projects, action.payload];
        case 'DELETE':
            return projects.filter((project) => project._id !== action.payload);
        default:
            return projects;
    }
}

export default projectsReducer;