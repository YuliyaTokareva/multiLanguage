import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './Home';
import News from './multisite/components/news/News';
import Authorization from './multisite/components/authorization/Authorization';

import store from './store.js';
import Menu from './multisite/components/menu/Menu';
import ThemeProvider from './theme/ThemeProvider';
import theme from './theme/index';
import { CssBaseline } from '@mui/material';
// import ThemeProvider from './theme/ThemeProvider';
// import theme from './theme/index';
// import { CssBaseline } from '@material-ui/core';
//import { ThemeProvider } from '@mui/material/styles';

// import theme from './theme/index';
// import { CssBaseline } from '@mui/material';

// import { red } from '@mui/material/colors';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500]
//     }
//   }
// });

const App = () => {
  return (
    <div className="page">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Provider store={store}>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/authorization" element={<Authorization />} />
            </Routes>
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
