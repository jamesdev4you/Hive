import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import '../../navlink.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';
import { MyHeaderButton } from '../styledComponents';

const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: '/' },

];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'primary.main' }}
    >
      
      
      <List sx={{ backgroundColor: 'primary.main' }}>
        {navItems.map((item) => (
          <ListItem key={item.text} sx={{ margin: '15px 0px' }} disablePadding>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '20px',
                marginRight: 'auto',
                marginLeft: '1em'
              }}
              to={item.href}
            >
              {item.text}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'block', lg: 'none' } }}
          >
            <MenuIcon sx={{ color: 'secondary.main' }} />
          </IconButton>
          <Box
            sx={{
              display: 'block',
              height: '40px',
              width: '70px',
              marginLeft: {
                xs: 'auto',
                sm: 'auto',
                md: 'auto',
                lg: '0px',
                xl: '0px',
              },
              
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          />
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
              marginLeft: {
                xs: 'none',
                sm: 'none',
                md: '80px',
                lg: '0px',
                xl: '550px',
              },
              margin: 'auto'
            }}
          >
            {navItems.map((item) => (
              <NavLink key={item.href} className='menu_link' to={item.href}>
                {item.text}
              </NavLink>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },

              gap: '1em',
              marginLeft: {
                xl: 'none',
                lg: 'none',
                md: 'auto',
                sm: 'auto',
                xs: 'auto',
              },
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
              }}
            >
              <MyHeaderButton children='#555-555-5555' />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
              }}
            >
              <MyHeaderButton children='Request Appointment' />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'primary.main',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}


export default Navbar()

