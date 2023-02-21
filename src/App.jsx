import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './Home';
import News from './multisite/components/news/News';
import Authorization from './multisite/components/authorization/Authorization';

import store from './store.js';
import Header from './multisite/components/header/Header';
import ThemeProvider from './theme/ThemeProvider';
import theme from './theme/index';
import { CssBaseline } from '@mui/material';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/authorization" element={<Authorization />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
