import isPropValid from '@emotion/is-prop-valid';
import { RenderResult, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import { store } from '../store';

export const customRender = (children: React.ReactNode): RenderResult => {
  return render(
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter>{children}</MemoryRouter>
        </ThemeProvider>
      </Provider>
      ,
    </StyleSheetManager>,
  );
};
