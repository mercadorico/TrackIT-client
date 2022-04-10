import React, { useEffect, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBugs, selectBug } from '../../../actions/bugs';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './styles.js';
import ReportBug from './ReportBug/ReportBug';

const Bugs = ({project_id}) => {
    const dispatch = useDispatch();
    const bugs = useSelector((state) => state.bugs);
    const [selectedID, setSelectedID] = useState('');

    useEffect(() => {
        dispatch(fetchBugs(project_id));
    }, [dispatch, project_id]);

    const handleClick = (project_id, id) => {
        dispatch(selectBug(project_id, id));
        setSelectedID(id);
    }

    return (
        <ThemeProvider theme={myTheme} >
            <TableContainer component={Paper} sx={{ maxWidth: 650, mt: 2 }}>
                <Table aria-label='bugs-table'>
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography variant='subtitle1' >BUGS</Typography>
                                <ReportBug id={project_id} />
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{bgcolor: 'myColor.customBackground'}}>
                            <TableCell sx={{color: 'myColor.textColor'}} size='small'>TICKET TITLE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bugs.map(({ _id, title }) => (
                            <TableRow key={_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover selected={selectedID === _id}
                            onClick={() => handleClick(project_id, _id)}>
                                <TableCell component="th" scope="row"> {title} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>

  )
}

export default Bugs