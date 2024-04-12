import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../src/styles/globals';
import theme from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
