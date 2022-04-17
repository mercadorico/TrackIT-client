import React, { useState } from 'react'
import DrawerCustom from './DrawerCustom/DrawerCustom';
import Navbar from './Navbar/Navbar';

const ResponsiveDrawer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <Navbar drawerWidth={240} handleDrawerToggle={handleDrawerToggle} />
            <DrawerCustom mobileOpen={mobileOpen} drawerWidth={240} handleDrawerToggle={handleDrawerToggle} />
        </>
    )
}

export default ResponsiveDrawer