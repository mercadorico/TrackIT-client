import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

const ReportBug = () => {
    const [bug, setBug] = useState({title: '', detail: '', status: '', priority: ''});
    const [open, setOpen] = useState(false);

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

    return (
        <>
            <Button variant='contained' size='small' onClick={handleClickOpen}>
                New Ticket
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Report a Bug</DialogTitle>
                <form autoComplete='off'>
                    <DialogContent>
                        <TextField required name='title' type='text' label='Title' fullWidth autoFocus sx={{mb: 2}} size='small'> </TextField>
                        <TextField required name='detail' type='text' label='Write Detail' fullWidth multiline minRows={3} maxRows={6} sx={{mb: 2}}> </TextField>

                        <FormControl sx={{minWidth: 130}} size='small'>
                            <InputLabel id='status-select-label'>Status</InputLabel>
                            <Select name='status' value={bug.status} label='Status' id='status-select' labelId='status-select-label' onChange={handleStatusChange}>
                                <MenuItem value='open'>Open</MenuItem>
                                <MenuItem value='closed'>Closed</MenuItem>
                                <MenuItem value='in-progress'>In Progress</MenuItem>
                                <MenuItem value='resolved'>Resolved</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{minWidth: 130}} size='small'>
                            <InputLabel id='priority-select-label'>Priority</InputLabel>
                            <Select name='priority' value={bug.priority} label='Priority' id='priority-select' labelId='priority-select-label' 
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