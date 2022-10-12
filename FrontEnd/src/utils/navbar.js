import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" style={{ background: '#303f9f' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Button color="inherit" href='/'>Home</Button>
          <Button color="inherit" href='/about'>About WMB Walks</Button>
          <Button color="inherit" href='/walk'>Token Info</Button>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
              <Button sx={{ color: '#fff' }} href='/manageTokens'>
                Your Account
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;