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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
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