import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, AppBar, Toolbar, IconButton, Divider, Box, Avatar } from '@mui/material';

const Navbar = ({drawerWidth, handleDrawerToggle}) => {
    const [appbar, iconbutton] = [
                        {width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }},
                        { mr: 2, display: { sm: 'none' } }
                     ];

    const user = JSON.parse(localStorage.getItem('profile'));

    let name = '';

    if(user) {
        name = user?.result?.name;
    }


    // split name and get first letter of each string.
    const splitName = name.split(' ').map((item) => item.charAt(0));
    const firstLetters = `${splitName[0]}${splitName[splitName.length - 1]}`;
                     
    return (
        <AppBar color='inherit' position="fixed" elevation={0} sx={appbar}>
            <Toolbar variant='regular' sx={{display: 'flex'}}>
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={iconbutton}>
                    <MenuIcon />
                </IconButton>
                <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'end', boxSizing: 'border-box', pr: {sm: 5, xs: 1}}}>
                    <Avatar sx={{bgcolor: 'primary.main', width: {sm: 36, xs: 27}, height: {sm: 36, xs: 27}, mr: 1}}>
                        <Typography sx={{fontSize: {sm: 18, xs: 14}}}>{firstLetters}</Typography>
                    </Avatar>
                    <Typography sx={{fontSize: {sm: 22, xs: 16}}} >{name}</Typography>
                </Box>
            </Toolbar>
            <Divider />
        </AppBar> 
    )
}

export default Navbar