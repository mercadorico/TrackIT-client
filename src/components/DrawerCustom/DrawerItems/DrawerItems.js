import React from 'react'
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Toolbar, Typography } from '@mui/material';

const Drawer = (props) => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

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
            </List>
        </>
    )
    }

export default Drawer