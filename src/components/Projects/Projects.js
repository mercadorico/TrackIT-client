import React, { useEffect } from 'react'
import {Toolbar, Box, Typography} from '@mui/material';
import BasicTable from './Table/Table';
import AddProject from './AddProject/AddProject';
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../../actions/projects';

const Projects = ({drawerWidth}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navState = useSelector(state => state.navState);

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