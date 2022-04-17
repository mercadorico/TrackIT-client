import React from 'react'
import DrawerItems from './DrawerItems/DrawerItems'
import {Drawer, Box} from '@mui/material';

const DrawerCustom = ({drawerWidth, mobileOpen, window, handleDrawerToggle}) => {
    
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >
        <DrawerItems handleDrawerToggle={handleDrawerToggle}></DrawerItems>
        </Drawer>

        <Drawer variant="permanent"
        sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
        >
        <DrawerItems handleDrawerToggle={handleDrawerToggle}></DrawerItems>
        </Drawer>
    </Box>
  )
}

export default DrawerCustom