import React, { useEffect } from 'react';
import { Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux';
import DeleteModal from './DeleteModal/DeleteModal';

export default function BasicTable() {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);
    const tableHeader = ['Project Name', 'Date Started', 'Status', 'Issues', 'Actions']

    useEffect(() => {
      // re-render the DOM when projects state changes value.
    }, [projects, dispatch])

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{bgcolor : 'primary.main'}}>
              {tableHeader.map((item) => (
                <TableCell>
                  <Typography variant='subtitle1' color='primary.contrastText'>{item}</Typography>
                </TableCell>           
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {projects.map(({_id, title, createdAt, bugs}) => (
              <TableRow key={_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row"> {title} </TableCell>
                <TableCell align="left">{createdAt}</TableCell>
                <TableCell align="left">Ongoing</TableCell>
                <TableCell align="left">{bugs.length}</TableCell>
                <TableCell align="left">
                  <IconButton color='inherit' size='small' sx={{mr: 1}}>
                    <EditIcon />
                  </IconButton>
                  <DeleteModal id={_id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}