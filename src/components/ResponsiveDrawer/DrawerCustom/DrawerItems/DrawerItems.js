import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, List, ListItemButton, ListItemText, ListItemIcon, Toolbar, Button} from '@mui/material';
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
        dispatch({type: 'RESET_SELECT_BUG'});

        if(actionType === 'ACCOUNT') {
            navigate('/account')
        } else {
            navigate('/');
        }
    };

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        dispatch({type: 'RESET_ERROR'});
        dispatch({type: 'MY_PROJECTS'});
        dispatch({type: 'RESET_SELECT_BUG'});
        navigate('/auth');
    }

    return (
        <>
            <Toolbar>
                <img src={Logo} alt="logo" />
            </Toolbar>
            <Divider />
            <List>
                <ListItemButton key='My Projects' selected={selectedNav === 'My Projects'} onClick={(event) => handleListItemClick(event, 'MY_PROJECTS')}>
                    <ListItemIcon>
                        <FolderSharedIcon />
                    </ListItemIcon>
                    <ListItemText primary='My Projects' />
                </ListItemButton>
                <ListItemButton key='All Projects' selected={selectedNav === 'All Projects'} onClick={(event) => handleListItemClick(event, 'ALL_PROJECTS')}>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary='All Projects' />
                </ListItemButton>
                <ListItemButton key='Account' selected={selectedNav === 'Account'} onClick={(event) => handleListItemClick(event, 'ACCOUNT')}>
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