import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './page/Home';
import News from './page/News';
import Profile from './page/Profile';
import Authorization from './page/Authorization';
import store from './store.js';
import Header from './multisite/components/header/Header';
import ThemeProvider from './theme/ThemeProvider';
import theme from './theme/theme';

import CssBaseline from '@mui/material/CssBaseline';

const App: React.FC = () => {
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
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
