import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Projects from './components/Projects/Projects';
import SelectedProject from './components/SelectedProject/SelectedProject';
import Auth from './components/Auth/Auth';
import './App.css';

const drawerWidth = 240;

const App = () => {

    return (
            <Box sx = {{display: 'flex'}}>    
                    <Routes>
                        <Route path='/auth' element={<Auth />}/>
                        <Route path='/' element={<Projects drawerWidth={drawerWidth} />}/>
                        <Route path='/projects/:id' element={<SelectedProject drawerWidth={drawerWidth} />} />
                    </Routes>    
            </Box>   
    );
}

export default App;