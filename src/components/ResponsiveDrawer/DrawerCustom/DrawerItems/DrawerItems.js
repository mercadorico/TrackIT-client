import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Divider, List, ListItem, ListItemText} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../../../../assets/TrackIT2.svg'


const Drawer = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        dispatch({type: 'RESET_ERROR'});
        navigate('/auth');
    }

    return (
        <>
            <Toolbar>
                <img src={Logo} alt="logo" />
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