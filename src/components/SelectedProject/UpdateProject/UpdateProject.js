import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateProject } from '../../../actions/projects'

const UpdateProject = ({id, title, description}) => {
    const [selectedProject, setSelectedProject] = useState({title: '', description: ''})
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
        setSelectedProject({title: title, description: description});
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProject(id, selectedProject));
    }

    return (
        <>
        <Button variant='outlined' onClick={handleClickOpen} sx={{mr: 1}}>
            EDIT
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>Add Project</DialogTitle>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField name='title' type='text' label='Title' fullWidth autoFocus sx={{mb: 2}} size='small' value={selectedProject.title}
                        onChange={(e) => setSelectedProject({...selectedProject, title: e.target.value})}>
                    </TextField> 
                    <TextField name='description' type='text' label='Write description' fullWidth multiline minRows={3} maxRows={6} value={selectedProject.description}
                        onChange={(e) => setSelectedProject({...selectedProject, description: e.target.value})}>
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

export default UpdateProject