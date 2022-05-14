import React from 'react';
import {Link} from 'react-router-dom'
import { Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip  } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useSelector, useDispatch } from 'react-redux';
import DeleteModal from './DeleteModal/DeleteModal';
import { selectProject } from '../../../actions/projects';

export default function BasicTable() {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);
    const tableHeader = ['PROJECT NAME', 'DATE STARTED', 'ACTIONS'];

    // contains user information from local storage
    const user = JSON.parse(localStorage.getItem('profile'));

    const selectedNav = useSelector(state => state.navState);

    const Row = ({_id, title, createdAt, author}) => {
      return (
      <TableRow key={_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
        <TableCell component="th" scope="row"> {title} </TableCell>
        <TableCell sx={{display: {xs: 'none', md: 'table-cell'}}} align="left">{createdAt}</TableCell>
        <TableCell align="left">
          <Tooltip title='Open'>
            <IconButton component={Link} to={`projects/${_id}`} color='inherit' size='small' sx={{mr: 1}} onClick={() => dispatch(selectProject(_id))} >
                <OpenInNewIcon />
            </IconButton> 
          </Tooltip>
          {author === user?.result?._id && <DeleteModal id={_id} />}
        </TableCell>
      </TableRow>
      )
    }

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{bgcolor: 'primary.main'}}>
                {tableHeader.map((item) => (
                  <TableCell sx={{display: {xs: item === 'DATE STARTED' && 'none' , md: item === 'DATE STARTED' && 'table-cell'}}} key={item} size='small'>
                    <Typography variant='subtitle2' color='primary.contrastText'>{item}</Typography>
                  </TableCell>           
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map(({_id, title, createdAt, author}) => {
                if(selectedNav === 'My Projects') return author === user?.result?._id && <Row _id={_id} title={title} createdAt={createdAt} author={author} />
                if(selectedNav === 'All Projects') return <Row _id={_id} title={title} createdAt={createdAt} author={author} />
                if(selectedNav === 'Account') return <h1>Ongoing Build...</h1>
                return 'Invalid Condition';
              })}
            </TableBody>
          </Table>
        </TableContainer>
    );
}