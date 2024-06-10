import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { BreadCrumb } from '.';

describe('BreadCrumb', () => {
  it('should render default', () => {
    customRender(<BreadCrumb productName="camiseta" />);

    const linkHome = screen.getByRole('link', { name: 'home' });
    const linkShop = screen.getByRole('link', { name: 'shop' });
    const span = screen.getByText('camiseta');

    expect(linkHome).toBeInTheDocument();
    expect(linkHome).toHaveAttribute('href', '/');
    expect(linkShop).toBeInTheDocument();
    expect(linkShop).toHaveAttribute('href', '/shop');
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('camiseta');
  });

  it('should render a snapshot', () => {
    const { container } = customRender(<BreadCrumb productName="camiseta" />);

    expect(container).toMatchSnapshot();
  });
});
