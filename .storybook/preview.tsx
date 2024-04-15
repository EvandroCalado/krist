import React from 'react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../src/styles/globals';
import theme from '../src/styles/theme';

export const decorators = [
  withRouter,
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
