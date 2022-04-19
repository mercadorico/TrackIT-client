import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Divider, List, ListItem, ListItemText} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Drawer = (props) => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        navigate('/auth');
    }

    return (
        <>
            <Toolbar>
                <Typography variant='h6'>
                    {date.toLocaleDateString('en-US', options)}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {['Projects', 'My Project', 'Bugs', 'Report Bug'].map((text, index) => (
                <ListItem button key={text} onClick={props.handleDrawerToggle}>
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
                <ListItem>
                    <Button onClick={logout} variant='outlined' fullWidth>Logout</Button>
                </ListItem>
            </List>
        </>
    )
    }

export default Drawer