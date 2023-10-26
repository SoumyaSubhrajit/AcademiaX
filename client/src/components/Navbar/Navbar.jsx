import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Import the useTheme hook

const Navbar = () => {
  const theme = useTheme(); // Use the useTheme hook to get the theme object

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
            AcademiaX
          </Typography>
          <Button color='inherit' style={{ marginLeft: theme.spacing(2) }}>
            Login
          </Button>
          <Button color='inherit' style={{ marginLeft: theme.spacing(2) }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
