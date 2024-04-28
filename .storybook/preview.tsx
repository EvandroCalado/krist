import React from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-remix-react-router';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../src/styles/globals';
import theme from '../src/styles/theme';

import { store } from '../src/store';

export const decorators = [
  withRouter,
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  ),
];
