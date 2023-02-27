import { createTheme } from '@mui/material/styles';

import components from './options/components';
import palette from './options/palette';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  palette,
  components,
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200
    }
  },

  typography: {
    fontFamily: 'Raleway, Arial',

    h1: {
      fontSize: '4.2rem',
      lineHeight: '5.2rem',
      fontWeight: 500,
      color: palette.primary.main
    },

    h2: {
      fontSize: '2.2rem',
      lineHeight: '2.8rem',
      fontWeight: 400,
      color: palette.text.primary
    },
    h4: {
      fontSize: '0.8rem',
      lineHeight: '1rem',
      fontWeight: 400,
      color: palette.text.secondary,
      textTransform: 'uppercase'
    }
  }
});

export default theme;
