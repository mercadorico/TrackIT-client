import React, { useEffect, useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import DrawerCustom from './components/DrawerCustom/DrawerCustom'
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

import { useDispatch } from 'react-redux';
import { getProjects } from './actions/projects';

const drawerWidth = 240;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);
    
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
            <Box sx = {{display: 'flex'}}>
                <CssBaseline />

                <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />

                <DrawerCustom mobileOpen={mobileOpen} drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />

                <Projects drawerWidth={drawerWidth} />
            </Box>   
    );
}

export default App;