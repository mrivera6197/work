import * as React from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import { keyframes } from '@emotion/react';

import { Link } from "react-router-dom"

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NavBar() {
    const theme = createTheme({
        palette: {
          primary: {
            main: "#fff"
          }, 
          secondary: {
            main: "#A2B575"
          }
        }, 
        typography: {
          fontSize: 14,
        }
      })

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex', width: "40px"}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar sx={{
          padding: '1.5rem',
          background: '#202121', 
          perspective: '1000px', 
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none',
            
           }) }}
          >
            <MenuIcon sx={{  color: "#D7DCE3", }}/>
          </IconButton>
          <Typography variant="h6" noWrap component="div"
          className='fontClass'
          sx={{
            fontSize: '1.4rem',
            color: '#C7DDF8',
            transition: '0.2s ease', 
            '&:hover': {
              color: '#DAEBFF',
              transform: 'scale(1.05)'
            }
          }}>
            Mali Rivera
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
            padding: '0 1rem',
            background: '#202121', 
            perspective: '1000px', 
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}
          sx={{ 
            color: "#D7DCE3", 
            '&:hover': {
            color: '#73A4D4',
            transform: 'scale(1.1)'
          }}
        }
          >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ animation: `${open ? fadeInAnimation : ''} 1s ease-in-out` }}>
            <ListItem disablePadding component={Link} to="/" sx={{ perspective: '1000px'}}>
              <ListItemButton
               sx={{
                color: "#D7DCE3", 
                margin: '0.5rem 0', 
                border: '1px solid white', 
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;',
                transition: '0.2s ease', 
                transformStyle: 'preserve-3d', 
                transform: 'rotateY(-33deg)', 
                borderRadius: '2rem', 
                '&:hover': {
                  color: '#C8DDFB',
                  transform: 'rotateY(0deg)', 
                }
               }}>
                <ListItemIcon>
                  <HomeOutlinedIcon sx={{ color: "#D7DCE3", }}/> 
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/work"  sx={{ perspective: '1000px'}}>
              <ListItemButton
               sx={{
                color: "#D7DCE3", 
                transition: '0.2s ease', 
                margin: '0.5rem 0', 
                border: '1px solid white', 
                transformStyle: 'preserve-3d', 
                transform: 'rotateY(34deg)', 
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;',
                borderRadius: '2rem', 
                '&:hover': {
                  color: '#C8DDFB',
                  transform: 'rotateY(0deg)', 
                }
               }}>
                <ListItemIcon>
                  <WorkOutlineIcon sx={{ color: "#D7DCE3", }}/> 
                </ListItemIcon>
                <ListItemText primary="Work" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/about" sx={{ perspective: '1000px'}} >
              <ListItemButton
               sx={{
                color: "#D7DCE3", 
                transition: '0.2s ease', 
                margin: '0.5rem 0', 
                border: '1px solid white', 
                transformStyle: 'preserve-3d', 
                transform: 'rotateY(-35deg)', 
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;',
                borderRadius: '2rem', 
                '&:hover': {
                  color: '#C8DDFB',
                  transform: 'rotateY(0deg)', 
                } 
               }}>
                <ListItemIcon>
                  <SummarizeOutlinedIcon sx={{ color: "#D7DCE3", }}/> 
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/contact" sx={{ perspective: '1000px'}}>
              <ListItemButton
               sx={{
                color: "#D7DCE3", 
                transition: '0.2s ease', 
                margin: '0.5rem 0', 
                border: '1px solid white', 
                transformStyle: 'preserve-3d', 
                transform: 'rotateY(38deg)', 
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;',
                borderRadius: '2rem', 
                '&:hover': {
                  color: '#C8DDFB',
                  transform: 'rotateY(0deg)', 
                }
               }}>
                <ListItemIcon>
                  <ContactsOutlinedIcon sx={{ color: "#D7DCE3", }}/> 
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>

        </List>
      </Drawer>
    </Box>
    </ThemeProvider>
  );
}