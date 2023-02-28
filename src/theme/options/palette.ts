import { common } from '@mui/material/colors';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    yellow: string;
  }

  // interface Palette {
  //   support: {
  //     main: string;
  //     light: string;
  //     dark: string;
  //     darker: string;
  //   };
  // }
}

const palette = {
  primary: {
    main: '#086ad3',
    contrastText: common.white
  },

  background: {
    default: '#eee',
    paper: common.white
  },
  text: {
    primary: '#00141e',
    error: '#ff0000'
  }
};

export default palette;
