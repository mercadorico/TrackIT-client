import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { useDispatch } from 'react-redux';
import { reportBug } from '../../../../actions/bugs';

const ReportBug = ({id}) => {
    const [bug, setBug] = useState({title: '', detail: '', status: '', priority: ''});
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStatusChange = (event) => {
        setBug({...bug, status: event.target.value});
    };

    const handlePriorityChange = (event) => {
        setBug({...bug, priority: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(reportBug(id, bug));
        setBug({title: '', detail: '', status: '', priority: ''});
    }

    return (
        <>
            <Button variant='contained' size='small' onClick={handleClickOpen}>
                New Ticket
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Report a Bug</DialogTitle>
                <form autoComplete='off' onSubmit={handleSubmit} >
                    <DialogContent>
                        <TextField required name='title' type='text' label='Title' fullWidth autoFocus sx={{mb: 2}} size='small'
                            onChange={(e) => setBug({...bug, title: e.target.value})}> 
                        </TextField>
                        <TextField required name='detail' type='text' label='Write Detail' fullWidth multiline minRows={3} maxRows={6} sx={{mb: 2}}
                            onChange={(e) => setBug({...bug, detail: e.target.value})} > 
                        </TextField>

                        <FormControl sx={{minWidth: 130}} size='small'>
                            <InputLabel id='status-select-label'>Status</InputLabel>
                            <Select name='status' label='Status' id='status-select' labelId='status-select-label' displayEmpty
                                onChange={handleStatusChange}> 
                                <MenuItem value='open'>Open</MenuItem>
                                <MenuItem value='closed'>Closed</MenuItem>
                                <MenuItem value='in-progress'>In Progress</MenuItem>
                                <MenuItem value='resolved'>Resolved</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{minWidth: 130}} size='small'>
                            <InputLabel id='priority-select-label'>Priority</InputLabel>
                            <Select name='priority' label='Priority' id='priority-select' labelId='priority-select-label' displayEmpty
                                onChange={handlePriorityChange}>
                                    <MenuItem value='Low'>Low</MenuItem>
                                    <MenuItem value='Medium'>Medium</MenuItem>
                                    <MenuItem value='High'>High</MenuItem>
                                    <MenuItem value='Immediate'>Immediate</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} >Cancel</Button>
                        <Button onClick={handleClose} type='submit' >Sumbit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default ReportBug