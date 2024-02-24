import React from 'react';
import Box from '@mui/material/Box';
import Technician from '../../../assets/pictures/tech.png';

const HeaderImg = (props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xl: '40%', lg: '1000px', md: '800px', sm: '90%', xs: '100%' },
        height: {
          xl: '350px',
          lg: '250px',
          md: '200px',
          sm: '200px',
          xs: '200px',
        },
        backgroundColor: {
          xl: 'primary.main',
          lg: 'primary.main',
          md: 'primary.main',
          sm: 'none',
          xs: 'none',
        },
        borderRadius: '15px',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Technician})`,
          width: '100%',
          height: {
            xl: '350px',
            lg: '250px',
            md: '200px',
            sm: '200px',
            xs: '200px',
          },
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          borderStyle: 'solid',
          borderSize: '1px',
          borderColor: 'error.main',
          borderRadius: {
            xl: '15px',
            lg: '15px',
            md: '15px',
            sm: '0px',
            xs: '0px',
          },
          position: 'absolute',
          top: {
            xl: '10px',
            lg: '10px',
            md: '10px',
            sm: '0px',
            xs: '0px',
          },
          left: {
            xl: '10px',
            lg: '10px',
            md: '10px',
            sm: '0px',
            xs: '0px',
          },
          boxShadow: {
            xl: 'none',
            lg: 'none',
            md: 'none',
            sm: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            xs: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          },
        }}
      />
    </Box>
  );
};

export default HeaderImg;
