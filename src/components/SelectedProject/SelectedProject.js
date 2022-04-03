import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button, Toolbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getProjects, selectProject } from '../../actions/projects';
import UpdateProject from './UpdateProject/UpdateProject';
import Bugs from './BugsByProject/Bugs';

const SelectedProject = () => {
    const dispatch = useDispatch();
    const {_id, title, description} = useSelector((state) => state.selectedProject);
    const param = useParams();

    // reset selectedProject state into an empty object when returning on projects page
    const handleReturnHome = () => {
        dispatch({type: 'RESET'});
        dispatch(getProjects());
    }

    // fetch selected project when page is refreshed and state.selectedProject is reset into an empty object.
    useEffect(() => {
        dispatch(selectProject(param.id));
    }, [param.id, dispatch]);

    return (
        <>
            <Toolbar />
            <Card sx={{maxWidth: 650}} >
                <CardContent>
                    <Typography variant='h6' gutterBottom>{title}</Typography>
                    <Typography variant='body2'>{description}</Typography>
                </CardContent>
                <CardActions >
                    <UpdateProject id={_id} title={title} description={description} />
                    <Button variant='outlined' component={Link} to='/' onClick={() => handleReturnHome()}>HOME</Button>
                </CardActions>
            </Card>
            <Bugs id={_id} />
        </>
    )
}

export default SelectedProject