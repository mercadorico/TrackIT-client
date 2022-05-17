import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteProject } from '../../../../actions/projects'

const DeleteModal = ({id}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        dispatch(deleteProject(id));
    }
  
    return (
        <>
            <Tooltip title='Delete'>
                <IconButton color='inherit' size='small' onClick={handleClickOpen}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Delete Project</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this project?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={() => handleDelete(id)}>Delete</Button>
                    <Button variant='contained' color='error' onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteModal