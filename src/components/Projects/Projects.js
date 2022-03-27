import React from 'react'
import {Toolbar} from '@mui/material'
import BasicTable from '../Table/Table'
import AddProject from './AddProject/AddProject'

const Projects = () => {
  return (
    <>
      <Toolbar />
      <AddProject></AddProject>
      <BasicTable></BasicTable> 
    </>
  )
}

export default Projects