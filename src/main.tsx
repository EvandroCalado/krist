import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/globals.ts';
import theme from 'styles/theme.ts';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Toaster position="top-right" />
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
