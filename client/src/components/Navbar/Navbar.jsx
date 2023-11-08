import React from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import styles from './Styles';

////////// Matrial UI ///////////

const Navbar = () => {
  return (
    <div>
      <AppBar
        position='static'
        sx={{ background: '#f1f3f5', paddingBottom: '15px' }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            style={{ flexGrow: 1, color: '#212529', fontWeight: 800 }}
          >
            AcademiaX
          </Typography>
          <Button variant='contained' sx={styles.button}>
            Login
          </Button>
          <Button variant='contained' sx={styles.button}>
            sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
