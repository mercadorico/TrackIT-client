import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Toolbar, Paper, Avatar } from '@mui/material';

import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer';

const Account = ({drawerWidth}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const projects = useSelector(state => state.projects);
    
    // Filter projects that matches with the projects' author and current user id.
    const projectNumber = projects.filter((project) => {
        if(project.author === user?.result?._id)   return project;
        return null;
    });


    return (
        <>
            <ResponsiveDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                <Toolbar />
                <Paper sx={{maxWidth: 500, p: 2}}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <Avatar sx={{mr: 1}}>{user?.result?.name.charAt(0)}</Avatar>
                        <Typography variant='h5'>{user?.result?.name}</Typography>
                    </Box>
                    <Typography> {`Number of projects: ${projectNumber.length}`} </Typography>
                </Paper>
                
            </Box> 
        </>

    )
}

export default Account