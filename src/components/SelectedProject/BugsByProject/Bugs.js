import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, CardActions, Chip } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './styles.js';

import { selectBug } from '../../../actions/bugs';
import ReportBug from './ReportBug/ReportBug';
import statusColor from '../statuscolor';

const Bugs = ({project_id, authorId, currentUserId}) => {
    const dispatch = useDispatch();
    const bugs = useSelector((state) => state.bugs);
    const [selectedID, setSelectedID] = useState('');

    const handleClick = (project_id, id) => {
        dispatch(selectBug(project_id, id));
        setSelectedID(id);
    }

    return (
        <ThemeProvider theme={myTheme} >
            {bugs.length === 0 ? 
                <Card sx={{maxWidth: 500, mt: 2}}>
                    <CardContent>
                        <Typography>No Bugs Listed Yet</Typography>
                    </CardContent>
                    <CardActions>
                        {authorId === currentUserId && <ReportBug id={project_id} />}
                    </CardActions>
                </Card> : 
                <TableContainer component={Paper} sx={{ maxWidth: 500, mt: 2 }}>
                <Table aria-label='bugs-table'>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} size='small'>
                                <Typography sx={{fontSize: 14, fontWeight: 700, lineHeight: 2.2}} >Bug List</Typography>
                            </TableCell>
                            <TableCell size='small' padding='none' align='center'>
                                {authorId === currentUserId && <ReportBug id={project_id} />}
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{bgcolor: 'myColor.customBackground'}}>
                            <TableCell sx={{color: 'myColor.textColor'}} size='small'>TICKET TITLE</TableCell>
                            <TableCell sx={{color: 'myColor.textColor'}} size='small' align='center'>STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bugs.map(({ _id, title, status }) => (
                            <TableRow key={_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover selected={selectedID === _id}
                            onClick={() => handleClick(project_id, _id)}>
                                <TableCell component="th" scope="row"> {title} </TableCell>
                                <TableCell component="th" scope="row" align='center'> <Chip label={status} variant={status==='Resolved' ? 'filled' : 'outlined'} size='small' color={statusColor(status)} /> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            }
        </ThemeProvider>

  )
}

export default Bugs