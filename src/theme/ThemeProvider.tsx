import * as React from 'react';
import type { FC, ReactNode } from 'react';
import type { Theme } from '@mui/material';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';

type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
