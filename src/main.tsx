import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/globals.ts';
import theme from 'styles/theme.ts';

import App from './App.tsx';
import { store } from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <Toaster position="top-right" />
          <App />
          <GlobalStyles />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
