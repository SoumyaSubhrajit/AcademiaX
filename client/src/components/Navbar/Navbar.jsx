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
    border: '1px solid transparent',
    marginLeft: theme.spacing(2),
  },

  buttonHover: {
    '&:hover': {
      backgroundColor: '#8966f1',
      transition: 'background-color 0.5s, border 0.5s',
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

// adding some
