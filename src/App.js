import React, { useEffect } from 'react';
import ResponsiveDrawer from './components/ResponsiveDrawer/ResponsiveDrawer';

import { useDispatch } from 'react-redux';
import { getProjects } from './actions/projects';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <div>
            <ResponsiveDrawer />     
        </div>
    );
}

export default App;