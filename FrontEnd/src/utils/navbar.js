import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../images/logo.png'

//navigation bar containing links to important pages
const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" style={{ background: '#003b5c' }}>
      <Container maxWidth="xl" >
        <img  src={logo} height='70' alt="walk 10000" align='right' />
        <Toolbar disableGutters >
          <Button color="inherit" href='/'>Home</Button>
          <Button color="inherit" href='/about'>About</Button>
          <Button color="inherit" href='/walk'>Account</Button>
          <Button color="inherit" href='/tutorials'>Tutorials</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;