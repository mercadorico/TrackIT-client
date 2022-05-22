import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import { updateBug } from '../../../../actions/bugs';

const UpdateBug = ({title, detail, status, priority, project_id, id, solution}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [bugUpdate, setBugUpdate] = useState({title: '', detail: '', status: '', priority: '', solution: ''});

  const handleClickOpen = () => {
    setOpen(true)
    setBugUpdate({title: title, detail: detail, status: status, priority: priority, solution: solution})
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleStatusChange = (event) => {
      setBugUpdate({...bugUpdate, status: event.target.value});
  };

  const handlePriorityChange = (event) => {
      setBugUpdate({...bugUpdate, priority: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateBug(project_id, id, bugUpdate));
    
    // UPDATE_STATUS action updates the bugs array after updating a selected bug in order to dynamically update the status in bug list table
    dispatch({type: 'UPDATE_BUGS_LIST', payload: { _id: id, ...bugUpdate}});
  }

  return (
    <>
      <Button size='small' variant='outlined' onClick={handleClickOpen} sx={{mr: 1}}>
        EDIT
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth >
        <DialogTitle>Edit Bug Info</DialogTitle>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <DialogContent>
            <TextField required name='title' type='text' label='Title' fullWidth autoFocus sx={{mb: 2}} size='small' value={bugUpdate.title}
                onChange={(e) => setBugUpdate({...bugUpdate, title: e.target.value})}> 
            </TextField>
            <TextField required name='detail' type='text' label='Write Detail' fullWidth multiline minRows={3} maxRows={6} sx={{mb: 2}} value={bugUpdate.detail}
                onChange={(e) => setBugUpdate({...bugUpdate, detail: e.target.value})} > 
            </TextField>
            {bugUpdate.status === 'Resolved' && 
              <TextField required name='solution' type='text' label='Write Solution' fullWidth multiline minRows={3} maxRows={6} sx={{mb: 2}} value={bugUpdate.solution}
                onChange={(e) => setBugUpdate({...bugUpdate, solution: e.target.value})} > 
              </TextField>}

            <FormControl sx={{minWidth: 130}} size='small'>
                <InputLabel id='status-select-label'>Status</InputLabel>
                <Select name='status' label='Status' id='status-select' labelId='status-select-label' displayEmpty value={bugUpdate.status}
                    onChange={handleStatusChange}> 
                    <MenuItem value='Open'>Open</MenuItem>
                    <MenuItem value='Closed'>Closed</MenuItem>
                    <MenuItem value='In-Progress'>In Progress</MenuItem>
                    <MenuItem value='Resolved'>Resolved</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{minWidth: 130}} size='small'>
                <InputLabel id='priority-select-label'>Priority</InputLabel>
                <Select name='priority' label='Priority' id='priority-select' labelId='priority-select-label' displayEmpty value={bugUpdate.priority}
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

export default UpdateBug;