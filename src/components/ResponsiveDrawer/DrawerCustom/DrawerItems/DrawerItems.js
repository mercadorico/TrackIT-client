import React from 'react'
import { Divider, List, ListItemButton, ListItemText, ListItemIcon} from '@mui/material';
import { Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import FolderIcon from '@mui/icons-material/Folder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from '../../../../assets/TrackIT2.svg'


const Drawer = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // navState for active item on drawer
    const selectedNav = useSelector(state => state.navState)

    const handleListItemClick = (event, actionType) => {
        props.handleDrawerToggle();
        dispatch({type: actionType});
    };

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
                <ListItemButton key='My Projects' selected={selectedNav === 0} onClick={(event) => handleListItemClick(event, 'MY_PROJECTS')}>
                    <ListItemIcon>
                        <FolderSharedIcon />
                    </ListItemIcon>
                    <ListItemText primary='My Projects' />
                </ListItemButton>
                <ListItemButton key='All Projects' selected={selectedNav === 1} onClick={(event) => handleListItemClick(event, 'ALL_PROJECTS')}>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary='All Projects' />
                </ListItemButton>
                <ListItemButton key='Account' selected={selectedNav === 2} onClick={(event) => handleListItemClick(event, 'ACCOUNT')}>
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary='Account' />
                </ListItemButton>
                <ListItemButton>
                    <Button onClick={logout} variant='outlined' fullWidth>Logout</Button>
                </ListItemButton>
            </List>
        </>
    )
    }

export default Drawer