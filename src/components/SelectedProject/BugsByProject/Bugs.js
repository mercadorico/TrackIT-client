import React, { useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBugs } from '../../../actions/bugs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        myColor: {
            customBackground: grey[100],
            textColor: grey[600]
        },
    }
})

const Bugs = ({id}) => {
    const dispatch = useDispatch();
    const bugs = useSelector((state) => state.bugs);

    useEffect(() => {
        dispatch(fetchBugs(id));
    }, [dispatch, id]);

    return (
        <ThemeProvider theme={theme} >
            <TableContainer component={Paper} sx={{ maxWidth: 650, mt: 2 }}>
                <Table aria-label='bugs-table'>
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography variant='subtitle1' >BUGS</Typography>
                                <Button variant='contained' size='small'>New Ticket</Button>
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{bgcolor: 'myColor.customBackground'}}>
                            <TableCell sx={{color: 'myColor.textColor'}} size='small'>TICKET TITLE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bugs.map(({ _id, title }) => (
                            <TableRow key={_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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