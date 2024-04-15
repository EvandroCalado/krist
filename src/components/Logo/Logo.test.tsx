import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { Logo } from './Logo.styles';

describe('Logo', () => {
  it('should render default', () => {
    customRender(<Logo />);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveStyle({
      width: '143px',
      height: '59px',
    });
  });

  it('should render a snapshot', () => {
    const { container } = customRender(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
