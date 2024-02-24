import * as React from 'react';
import HeaderText from './HeaderText';
import HeaderImg from './HeaderImg';
import HeaderOptions from './HeaderOptions';
import Box from '@mui/material/Box';

const Header = (props) => {
  console.log('gooo', props.HomeOptions)
  return (
    <Box
      sx={{
        width: { xl: '70%', lg: '100%', md: '100%', sm: '100%', xs: '100%' },
        display: 'flex',
        justifyContent: {
          xl: 'start',
          lg: 'start',
          md: 'center',
          sm: 'center',
          xs: 'center',
        },
        alignItems: {
          xl: 'space-between',
          lg: 'space-between',
          md: 'space-between',
          sm: 'center',
          xs: 'center',
        },
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: { xl: '70%', lg: '80%', md: '90%', sm: '90%', xs: '90%' },
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          justifyContent: {
            xl: 'space-between',
            lg: 'center',
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          alignItems: {
            xl: 'start',
            lg: 'start',
            md: 'start',
            sm: 'center',
            xs: 'center',
          },
          gap: {
            xl: '0em',
            lg: '3em',
            md: '1em',
            sm: '2em',
            xs: '4em',
          },
        }}
      >
        <HeaderText headerOption={props.HomeOptions}/>
        <HeaderImg headerOption={props.HomeOptions}/>
      </Box>
      <HeaderOptions />
    </Box>
  );
};

export default Header;
