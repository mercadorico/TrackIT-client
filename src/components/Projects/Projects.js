import React, { useEffect } from 'react'
import {Toolbar, Box} from '@mui/material';
import BasicTable from './Table/Table';
import AddProject from './AddProject/AddProject';
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../../actions/projects';

const Projects = ({drawerWidth}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <BasicTable></BasicTable> 
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <AddProject/>
        </Box>
      </Box>
    </>
  )
}

export default Projects