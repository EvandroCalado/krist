import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { Logo } from '.';

describe('Logo', () => {
  it('should render default', () => {
    customRender(<Logo />);

    const link = screen.getByRole('link');
    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveStyle({
      width: '143px',
      height: '59px',
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('should render a snapshot', () => {
    const { container } = customRender(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
