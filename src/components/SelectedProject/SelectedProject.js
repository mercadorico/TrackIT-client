import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button, Toolbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../actions/projects';

const SelectedProject = () => {
    const dispatch = useDispatch();

    const projects = useSelector((state) => state.projects);

    return (
        <>
            <Toolbar />
            <Card sx={{maxWidth: 650}} >
                {projects.length > 1 ? null ://conditional rendering due projects state is not yet transformed on first render, try removing condition to see effect.
                    <CardContent>
                        <Typography variant='h6' gutterBottom>{projects[0].title}</Typography>
                        <Typography variant='body2'>{projects[0].description}</Typography>
                    </CardContent>
                }
                <CardActions>
                    <Button>EDIT</Button>
                    <Button component={Link} to='/' onClick={() => dispatch(getProjects())}>HOME</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default SelectedProject