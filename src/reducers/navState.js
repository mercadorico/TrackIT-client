const navState = (nav = 0,  action) => {
    switch (action.type) {
        case 'MY_PROJECTS':
            return 0;
        case 'ALL_PROJECTS':
            return 1;
        case 'ACCOUNT':
            return 2;
        default:
            return nav;
    }
}

export default navState;