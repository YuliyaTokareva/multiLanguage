import palette from './palette';
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        color: 'darkred',
        backgroundColor: palette.background.default,
        '& h1': {
          color: 'black'
        },
        '& a': {
          textDecoration: 'none',
          color: palette.text.primary,
          cursor: 'pointer',
          flexShrink: 0,
          fontSize: '1.2rem',
          lineHeight: '2.15rem',
          fontWeight: 600,
          '&:hover': {
            color: palette.primary.main
          }
        },
        '& header': {
          backgroundColor: palette.background.paper,
          margin: '0, auto',
          padding: '2, 1'
        }
      }
    }
  }
};

export default components;
