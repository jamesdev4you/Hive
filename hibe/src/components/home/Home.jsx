import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Header from './header/Header';




const Home = () => {


  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: 'warning.main',
        padding: {
          xs: '8em 0em 4em',
          sm: '6em 0em 4em',
          md: '8em 0em 4em',
          lg: '8em 0em 7em',
          xl: '12em 0em 4em',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Header />
    </Box>
  );
};
export default Home;
