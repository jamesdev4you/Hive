import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as BlogIcon } from '../../../assets/svg/blog.svg';
import { ReactComponent as DollarIcon } from '../../../assets/svg/dollar.svg';
import { ReactComponent as HeaterIcon } from '../../../assets/svg/heater.svg';
import { ReactComponent as OutdoorUnitIcon } from '../../../assets/svg/outdoor-unit.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/svg/phone-call.svg';
import { ReactComponent as ThermostatIcon } from '../../../assets/svg/thermostat.svg';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const HeaderOptions = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [hovered, setHovered] = useState<number | null>(null);
  const circleOptions = [
    {
      logo: BlogIcon,
      text: 'Blogs',
      viewBox: '0 0 512 512',
      key: 1,
    },
    {
      logo: DollarIcon,
      text: 'Price Estimate',
      viewBox: '0 0 512 512',
      key: 2,
    },
    {
      logo: HeaterIcon,
      text: 'Heating',
      viewBox: '0 0 512 512',
      key: 3,
    },
    {
      logo: OutdoorUnitIcon,
      text: 'Air Conditioning',
      viewBox: '0 0 74 74',
      key: 4,
    },
    {
      logo: PhoneIcon,
      text: 'Call Now',
      viewBox: '0 0 512 512',
      key: 5,
    },
    {
      logo: ThermostatIcon,
      text: 'Thermostat',
      viewBox: '0 0 512 512',
      key: 6,
    },
  ];

  return (
    <Box
      sx={{
        width: {xl: '80%', lg: '80%', md: '90%', sm: '100%', xs: '100%'},
        height: 'auto',
        paddingTop: '2em',
        paddingBottom: '2em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {circleOptions.map(({ logo, text, viewBox, key }) => (
        <Box
          key={key}
          onMouseEnter={() => setHovered(key)}
          onMouseLeave={() => setHovered(null)}
          sx={{
            height: 'auto',
            width: 'auto',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
            },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Typography
            variant='subtitle1'
            sx={{
              marginTop: '.3em',
              fontWeight: 'bold',
              letterSpacing: '1px',
              lineHeight: '50px',
              transition: 'all .1s ease-in-out',
              textDecoration: hovered === key ? 'underline' : 'none',
              zIndex: '100',
              color: 'primary.main',
            }}
          >
            {text}
          </Typography>
          <Box
            sx={{
              height: { md: '80px', lg: '70px', xl: '90px' },
              width: { md: '80px', lg: '70px', xl: '90px' },
              backgroundColor: 'primary.main',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all .1s ease-in-out',
              borderStyle: hovered === key ? 'solid' : 'none',
              borderSize: hovered === key ? '2px' : 'none',
              borderColor: hovered === key ? 'error.main' : 'none',
              boxShadow:
                hovered === key
                  ? 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px'
                  : 'none',
            }}
          >
            <SvgIcon
              viewBox={viewBox}
              component={logo}
              sx={{
                transition: 'all .2s ease-in-out',
                height: {
                  xs: '30px',
                  sm: '60px',
                  md: hovered === key ? '40px' : '30px',
                  lg: hovered === key ? '40px' : '35px',
                  xl: hovered === key ? '40px' : '35px',
                },

                width: {
                  xs: '30px',
                  sm: '60px',
                  md: hovered === key ? '40px' : '30px',
                  lg: hovered === key ? '40px' : '35px',
                  xl: hovered === key ? '40px' : '35px',
                },
                color: 'secondary.main',
              }}
            ></SvgIcon>
          </Box>
          
        </Box>
      ))}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='icon label tabs example'
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          [`& .MuiTabs-scrollButtons`]: {
            color: 'secondary.main',
            '&.Mui-disabled': { opacity: 0.3 },
          },
          '& .MuiTab-root': {
            color: 'secondary.main',
          },
          '& .Mui-selected': {
            color: 'secondary.main', // Ensures selected tab text is also white
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'error.main', // Changes the indicator color to white
          },

          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'primary.main',
          paddingTop: {
            xs: '.5em',
            sm: '.5em',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
          
        }}
      >
        {circleOptions.map(({ logo, text, viewBox, key }) => (
          <Tab
            key={key}
            icon={
              <SvgIcon
                viewBox={viewBox}
                component={logo}
                sx={{
                  transition: 'all .1s ease-in-out',
                  height: {
                    xs: '50px',
                    sm: '60px',
                  },
                  width: {
                    xs: '50px',
                    sm: '60px',
                  },
                  color: 'secondary.main',
                
                }}
              />
            }
            label={text}
            sx={{
              '& .MuiTab-root': {
                color: 'seconday.main !important', // Overrides the color property more forcefully
              },
              "&.Mui-selected": {
                color: "info.main"
              },
              marginRight: '15px',
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default HeaderOptions;
