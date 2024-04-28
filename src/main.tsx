import isPropValid from '@emotion/is-prop-valid';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/globals.ts';
import theme from 'styles/theme.ts';

import App from './App.tsx';
import { store } from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
          <ThemeProvider theme={theme}>
            <Toaster />
            <App />
            <GlobalStyles />
          </ThemeProvider>
        </StyleSheetManager>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
