import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, AppBar, Toolbar, IconButton } from '@mui/material';

const Navbar = ({drawerWidth, handleDrawerToggle}) => {
  return (
    <AppBar
        position="fixed"
        sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        }}
    >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap component="div" >
            Issue Tracker
        </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar