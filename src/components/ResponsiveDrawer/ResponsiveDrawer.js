import * as React from 'react';
import {Box, CssBaseline, Drawer, Toolbar, List, ListItem} from '@mui/material';
import BasicTable from '../Table/Table';
import DrawerItems from './Drawer/Drawer';
import Navbar from './Navbar/Navbar';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const projects = useSelector((state) => state.projects);

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />

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
      <Box component="main" sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />

        <BasicTable></BasicTable>
        <List>
          {projects.map(({title, _id}) => (
            <ListItem divider key={_id}>
              {title}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;