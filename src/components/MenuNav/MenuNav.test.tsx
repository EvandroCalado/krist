import { fireEvent, screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { MenuNav } from '.';

describe('MenuNav', () => {
  it('should render default', () => {
    customRender(<MenuNav />);

    const nav = screen.getByRole('navigation');
    const links = screen.getAllByRole('link');

    expect(nav).toBeInTheDocument();
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('home');
    expect(links[0]).toHaveClass('active');
    expect(links[1]).toHaveTextContent('loja');
    expect(links[2]).toHaveTextContent('contato');

    fireEvent.click(links[1]);

    expect(links[0]).not.toHaveClass('active');
    expect(links[1]).toHaveClass('active');

    fireEvent.click(links[2]);

    expect(links[1]).not.toHaveClass('active');
    expect(links[2]).toHaveClass('active');
  });

  it('should render a snapshot', () => {
    const { container } = customRender(<MenuNav />);

    expect(container).toMatchSnapshot();
  });
});
