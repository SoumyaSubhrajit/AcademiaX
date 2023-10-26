import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Import the useTheme hook
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: 'transparent', // Set a transparent background
    border: '1px solid transparent', // Add border for a button-like appearance
    marginLeft: theme.spacing(2),
    transition: 'background-color 0.5s, border 0.5s', // Slower transition
  },
  // Apply styles when the button is hovered
  buttonHover: {
    '&:hover': {
      backgroundColor: '#6366f1',
      transition: 'background-color 0.5s, border 0.5s', // Slower transition
    },
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography
            className={classes.title}
            variant='h6'
            style={{ flexGrow: 1 }}
          >
            AcademiaX
          </Typography>
          <Button
            color='inherit'
            className={`${classes.button} ${classes.buttonHover}`}
            style={{ marginLeft: theme.spacing(2) }}
          >
            Login
          </Button>
          <Button
            className={`${classes.button} ${classes.buttonHover}`}
            color='inherit'
            style={{ marginLeft: theme.spacing(2) }}
          >
            sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
