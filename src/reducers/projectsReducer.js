const projectsReducer = (projects = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_PROJECTS':
            return action.payload;
        case 'CREATE':
            return [projects, action.payload]
        default:
            return projects
    }
}

export default projectsReducer;