import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardActions, Typography, Button, Toolbar, Box, CircularProgress } from '@mui/material'

import { selectProject } from '../../actions/projects';
import { fetchBugs } from '../../actions/bugs';
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer';
import UpdateProject from './UpdateProject/UpdateProject';
import Bugs from './BugsByProject/Bugs';
import SelectedBug from './SelectedBug/SelectedBug';

const SelectedProject = ({drawerWidth}) => {
    const dispatch = useDispatch();
    const {_id, title, description, author} = useSelector((state) => state.selectedProject);
    const param = useParams();
    const loading = useSelector(state => state.loadingReducer);
    console.log(loading);

    const user = JSON.parse(localStorage.getItem('profile'));

    // reset selectedProject state into an empty object when returning on projects page
    const handleReturnHome = () => {
        dispatch({type: 'RESET'});
        dispatch({type: 'RESET_SELECT_BUG'});
        dispatch({type: 'RESET_BUG_LIST'});
    }

    // fetch selected project when page is refreshed and state.selectedProject is reset into an empty object.
    useEffect(() => {
        dispatch(selectProject(param.id));
        dispatch(fetchBugs(param.id));
    }, [param.id, dispatch]);

    return (
        <>
            <ResponsiveDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                <Toolbar />
                {loading ? <CircularProgress/> : <>
                <Card sx={{maxWidth: 500}} >
                    <CardContent>
                        <Typography variant='h6' gutterBottom>{title}</Typography>
                        <Typography variant='body2'>{description}</Typography>
                    </CardContent>
                    <CardActions >
                        {author === user?.result?._id && <UpdateProject id={_id} title={title} description={description} />}
                        <Button size='small' variant='outlined' component={Link} to='/' onClick={() => handleReturnHome()}>HOME</Button>
                    </CardActions>
                </Card>
                <Box sx={{display: 'flex', alignItems: 'flex-start', gap: 5, flexWrap: 'wrap'}}>
                    <Bugs project_id={_id} authorId={author} currentUserId={user?.result?._id} />
                    <SelectedBug project_id={_id} authorId={author} currentUserId={user?.result?._id} />
                </Box>
                </>}
            </Box>
        </>
    )
}

export default SelectedProject