import React from 'react'
import {Box, Toolbar} from '@mui/material'
import BasicTable from '../Table/Table'
import AddProject from './AddProject/AddProject'

const Projects = ({drawerWidth}) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <AddProject></AddProject>
        <BasicTable></BasicTable>
    </Box>
  )
}

export default Projects