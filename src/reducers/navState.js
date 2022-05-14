const navState = (nav = 'My Projects',  action) => {
    switch (action.type) {
        case 'MY_PROJECTS':
            return 'My Projects';
        case 'ALL_PROJECTS':
            return 'All Projects';
        case 'ACCOUNT':
            return 'Account';
        default:
            return nav;
    }
}

export default navState;