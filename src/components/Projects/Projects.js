import React from 'react'
import {Toolbar, Box} from '@mui/material'
import BasicTable from '../Table/Table'
import AddProject from './AddProject/AddProject'

const Projects = () => {
  return (
    <>
      <Toolbar />
      <BasicTable></BasicTable> 
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <AddProject/>
      </Box>
    </>
  )
}

export default Projects