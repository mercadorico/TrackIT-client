import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useDispatch } from 'react-redux'
import { createProject } from '../../../api'

const AddProject = () => {
    const [project, setProject] = useState({title: '', description: ''})
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        dispatch(createProject(project));
    }

    return (
        <>
            <Button variant='contained' onClick={handleClickOpen} sx={{mb: 2}}>
                Add Project
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Add Project</DialogTitle>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField name='title' type='text' label='Title' fullWidth autoFocus sx={{mb: 2}} size='small' 
                            onChange={(e) => setProject({...project, title: e.target.value})}>
                        </TextField>
                        <TextField name='description' type='text' label='Write description' fullWidth multiline minRows={3} maxRows={6}
                            onChange={(e) => setProject({...project, description: e.target.value})}>
                        </TextField>
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

export default AddProject