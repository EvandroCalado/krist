import { RenderResult, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

export const customRender = (children: React.ReactNode): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>,
  );
};
