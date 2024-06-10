import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { customRender } from 'utils/test-utils';

import theme from 'styles/theme';

import { Search } from '.';

describe('Search', () => {
  it('should render default', () => {
    customRender(<Search />);

    const search = screen.getByRole('searchbox');

    expect(search).toBeInTheDocument();
    expect(search).toHaveAttribute('name', 'q');
    expect(search).toHaveValue('');
  });

  it('should render with defaultValue', () => {
    customRender(<Search defaultValue="test" />);

    const search = screen.getByRole('searchbox');

    expect(search).toHaveValue('test');
  });

  it('should render with send attribute', () => {
    customRender(<Search placeholder="test" />);

    const search = screen.getByRole('searchbox');

    expect(search).toHaveAttribute('placeholder', 'test');
  });

  it('should render with query value', () => {
    const route = '/?q=query';

    render(
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider theme={theme}>
          <Search />
        </ThemeProvider>
      </MemoryRouter>,
    );

    const search = screen.getByRole('searchbox');

    expect(search).toHaveValue('query');
  });

  it('should render a snapshot', () => {
    const { container } = customRender(<Search />);

    expect(container).toMatchSnapshot();
  });
});
