import React from 'react';

const Styles = {
  button: {
    background: 'rgb(247,150,192)',
    background:
      'radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%)',
    lineHeight: '42px',
    padding: '0px',
    width: '100px',
    marginRight: '15px',
    border: 'none',
    position: 'relative',
    '& span': {
      position: 'relative',
      display: 'block',

      height: '100%',
      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        height: '0%',
        width: '1px',
        boxShadow:
          '-1px -1px 20px 0px rgba(255,255,255,1), -4px -4px 5px 0px rgba(255,255,255,1), 7px 7px 20px 0px rgba(0,0,0,.4), 4px 4px 5px 0px rgba(0,0,0,.3)',
      },
      '&:before': {
        left: 0,
        top: 0,
        transition: 'all 500ms ease',
      },
      '&:after': {
        right: 0,
        bottom: 0,
        transition: 'all 500ms ease',
      },
    },
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      height: '0%',
      width: '1px',
      boxShadow:
        '-1px -1px 20px 0px rgba(255,255,255,1), -4px -4px 5px 0px rgba(255,255,255,1), 7px 7px 20px 0px rgba(0,0,0,.4), 4px 4px 5px 0px rgba(0,0,0,.3)',
    },
    '&:before': {
      right: 0,
      top: 0,
      transition: 'all 500ms ease',
    },
    '&:after': {
      left: 0,
      bottom: 0,
      transition: 'all 500ms ease',
    },
    '&:hover': {
      background: 'transparent',
      color: '#76aef1',
      boxShadow: 'none',
      '&:before': {
        height: '100%',
        transition: 'all 500ms ease',
      },
      '&:after': {
        height: '100%',
        transition: 'all 500ms ease',
      },
      '& span:before': {
        width: '100%',
      },
      '& span:after': {
        width: '100%',
      },
    },
  },
};

export default Styles;

