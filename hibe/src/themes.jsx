import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#316d92',
    },
    warning: {
      main: '#f1f1f1',
    },
    info: {
      main: '#FFC60B',
    },
  },
  typography: {
   
      h1: {
        fontSize: '3.0rem',
        fontWeight: 500,
      },
      h2: {
        fontSize: '2.6rem',
        fontWeight: 500,
      },
      h3: {
        fontSize: '2.2rem',
        fontWeight: 500,
      },
      h4: {
        fontSize: '1.8rem',
        fontWeight: 400,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 400,
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        textTransform: 'uppercase',
      }
  },
});

lightTheme = responsiveFontSizes(lightTheme, {
  factor: 2, 
});


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#2F4550',
    },
  },
});
