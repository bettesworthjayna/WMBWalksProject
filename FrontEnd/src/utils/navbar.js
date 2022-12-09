import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../images/logo.png'
//sx={{ height: 30 }}
//navigation bar containing links to important pages
const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" style={{ background: '#003b5c' }}>
      <Container maxWidth="xl" >
        
        <Toolbar disableGutters sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <Box>
          <Button color="inherit" href='/'>Home</Button>
          <Button color="inherit" href='/tutorials'>Tutorials</Button>
          <Button color="inherit" href='/about'>About</Button>
          <Button color="inherit"   href='/walk' alignItems='center'>My Account</Button>
          </Box>
          <Box alignItems='top'>
            
            <img src={logo} alt='logo' width='65' />
            
          </Box>
        </Toolbar>
       
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;