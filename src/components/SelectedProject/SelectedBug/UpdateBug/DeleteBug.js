import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Dialog, DialogContent, DialogActions, DialogTitle, Button } from '@mui/material';

import { deleteBug } from '../../../../actions/bugs';

const DeleteBug = ({project_id, id}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)   

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    }

    const handleDelete = () => {
      dispatch(deleteBug(project_id, id));
      setOpen(false);
      dispatch({type: 'RESET_SELECT_BUG'});
    }

    return (
      <>
        <Button variant='outlined' size='small' onClick={handleClickOpen} >DELETE</Button>
        <Dialog open={open} onClose={handleClose} fullWidth >
          <DialogTitle>Delete Bug</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete selected bug?</Typography>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={handleDelete} >DELETE</Button>
            <Button variant='contained' onClick={handleClose} color='error' >CANCEL</Button>
          </DialogActions>
        </Dialog>
      </>
    )
}

export default DeleteBug