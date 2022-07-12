import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Toolbar, Box, Typography} from '@mui/material';

import { getProjects } from '../../actions/projects';
import BasicTable from './Table/Table';
import AddProject from './AddProject/AddProject';
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer';

const Projects = ({drawerWidth}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navState = useSelector(state => state.navState);

  // Check if user successfully logged in thru local storage, redirect to auth page if not.
  useEffect(() => {
      if(localStorage.getItem('profile')) {
        dispatch(getProjects());
      } else {
        navigate('/auth');
      }
  }, [dispatch, navigate]);

  return (
    <>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
        <Toolbar />
        <Typography variant='h5' gutterBottom >  {navState} </Typography>
        <BasicTable></BasicTable> 
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <AddProject/>
        </Box>
      </Box>
    </>
  )
}

export default Projects