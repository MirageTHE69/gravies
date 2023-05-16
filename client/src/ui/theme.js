import { createTheme } from '@mui/material/styles';

export default createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  palette: {
    neutral: {
      white: '#fff',
      black: '#000',
    },
    grey: {
      dark: '#222',
      main: '#999',
      light: '#f4f4f4',
    },
  },
});
