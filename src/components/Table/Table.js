import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, IconButton  } from '@mui/material';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import { useSelector } from 'react-redux';

export default function BasicTable() {

  const projects = useSelector((state) => state.projects);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{bgcolor : 'primary.main'}}>
            <TableCell>
              <Typography variant='h6' color='primary.contrastText'>Project Name</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant='h6' color='primary.contrastText'>Date Started</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant='h6' color='primary.contrastText'>Status</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant='h6' color='primary.contrastText'>Issues</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant='h6' color='primary.contrastText'>View</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map(({_id, title, createdAt, bugs}) => (
            <TableRow
              key={_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell align="left">{createdAt}</TableCell>
              <TableCell align="left">Ongoing</TableCell>
              <TableCell align="left">{bugs.length}</TableCell>
              <TableCell align="left">
                <IconButton color='inherit' size='small'>
                  <PreviewOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}