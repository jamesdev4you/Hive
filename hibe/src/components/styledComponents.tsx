import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../font.css';

const HeaderButton = styled(Button)(({ theme }) => ({
  fontSize: '11px',
  fontWeight: '900',
  letterSpacing: '2px',
  padding: '7px 50px 7px',
  outline: '0',
  cursor: 'pointer',
  color: theme.palette.text.primary, 
  position: 'relative',
  backgroundColor: 'white', 
  userSelect: 'none',
  touchAction: 'manipulation',
  borderRadius: '13px',
  fontFamily: 'Birds',
  '&:after': {
    content: '""',
    backgroundColor: 'rgba(0,0,0,0)',
    border: `2px solid ${theme.palette.info.main}`, 
    width: '100%',
    zIndex: '1',
    position: 'absolute',
    height: '100%',
    top: '4px',
    left: '4px',
    transition: '0.2s',
    borderRadius: '13px',
  },
  '&:hover:after': {
    border: `2px solid ${theme.palette.info.main}`, 
    top: '0px',
    left: '0px',
  },
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
  },
  [`@media (min-width: 768px)`]: {
    padding: '4px 30px 4px',
  },
}));

const NormalButton = styled(Button)(({ theme }) => ({
  fontSize: '12px',
  letterSpacing: '1px',
  padding: '7px 50px 7px',
  outline: '0',
  border: `1px solid ${theme.palette.error.main}`,
  cursor: 'pointer',
  color: `${theme.palette.secondary.main}`,
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
  transition: '0.3s all ease-in-out',
  fontFamily: 'Birds',
  '&:hover': {
    color: theme.palette.info.main,
  },
}));

export const MyHeaderButton = (props) => (
  <HeaderButton variant='contained'> {props.children}</HeaderButton>
);

export const MyNormalButton = (props) => (
  <NormalButton variant='contained'> {props.children}</NormalButton>
);
