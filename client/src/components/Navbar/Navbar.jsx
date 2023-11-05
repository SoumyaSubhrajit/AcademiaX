import React from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

////////// Matrial UI ///////////

const Navbar = () => {
  return (
    <div>
      <AppBar
        position='static'
        sx={{ background: '#212529', paddingBottom: '15px' }}
      >
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
            AcademiaX
          </Typography>
          <Button variant='contained' sx={{ background: '#495057' }}>
            Login
          </Button>
          <Button
            variant='contained'
            sx={{
              background: '#495057',
              marginLeft: '15px', // use camelCase for CSS properties
            }}
          >
            sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// Adding
// Adding
export default Navbar;
