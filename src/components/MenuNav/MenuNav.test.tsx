import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { MenuNav } from '.';

describe('MenuNav', () => {
  it('should render default', () => {
    customRender(<MenuNav />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('home');
    expect(links[1]).toHaveTextContent('loja');
    expect(links[2]).toHaveTextContent('contato');
  });

  it('should render a snapshot', () => {
    const { container } = customRender(<MenuNav />);

    expect(container).toMatchSnapshot();
  });
});
