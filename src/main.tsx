import isPropValid from '@emotion/is-prop-valid';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
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

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
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
    </Elements>
  </React.StrictMode>,
);
