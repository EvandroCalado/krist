import { fireEvent, screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { MenuMobile } from '.';

describe('MenuMobile', () => {
  it('should render default', () => {
    customRender(<MenuMobile />);

    const wrapper = screen.getByTestId('wrapper');
    const menuContainer = screen.getByTestId('menu-container');

    expect(wrapper).toBeInTheDocument();
    expect(menuContainer).toBeInTheDocument();
    expect(menuContainer).toHaveStyle({
      right: '-320px',
    });
  });

  it('should render open/close menu', () => {
    customRender(<MenuMobile />);

    const wrapper = screen.getByTestId('wrapper');
    const menuContainer = screen.getByTestId('menu-container');
    const openMenu = wrapper.firstChild as HTMLElement;
    const closeMenu = menuContainer.firstChild as HTMLElement;

    fireEvent.click(openMenu);

    expect(menuContainer).toHaveStyle({
      right: '0',
    });

    fireEvent.click(closeMenu);

    expect(menuContainer).toHaveStyle({
      right: '-320px',
    });
  });
});
