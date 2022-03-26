import React from 'react'
import {Box, Toolbar, Button} from '@mui/material'
import BasicTable from '../Table/Table'

const Projects = ({drawerWidth}) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Button variant='contained' size='medium' sx={{mb: 2}}>Add Project</Button>
        <BasicTable></BasicTable>
    </Box>
  )
}

export default Projects