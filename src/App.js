import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { Account, Auth, Projects, SelectedProject } from './components';
import './App.css';

const drawerWidth = 240;

const App = () => {

    return (
            <Box sx = {{display: 'flex'}}>    
                    <Routes>
                        <Route path='/' element={<Projects drawerWidth={drawerWidth} />}/>
                        <Route path='/auth' element={<Auth />}/>
                        <Route path='/projects/:id' element={<SelectedProject drawerWidth={drawerWidth} />} />
                        <Route path='/account' element={<Account drawerWidth={drawerWidth}/>} />
                    </Routes>    
            </Box>   
    );
}

export default App;