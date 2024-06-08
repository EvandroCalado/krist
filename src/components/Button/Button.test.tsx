import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import theme from 'styles/theme';

import { Button } from '.';

describe('Button', () => {
  it('should render default', () => {
    customRender(<Button>Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Button');
    expect(button).toHaveStyle({
      'background-color': theme.colors.primary,
      width: 'max-content',
    });
  });

  it('should render with icon', () => {
    customRender(<Button icon={'icon'}>Button</Button>);

    const icon = screen.getByText(/icon/i);

    expect(icon).toBeInTheDocument();
  });

  it('should render with variant secondary', () => {
    customRender(<Button variant="secondary">Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      'background-color': theme.colors.primary,
      color: theme.colors.white,
    });
  });

  it('should render with width full', () => {
    customRender(<Button width="100%">Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      width: '100%',
    });
  });

  it('should render with width full', () => {
    customRender(<Button disabled>Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should match a snapshot', () => {
    const { container } = customRender(<Button disabled>Button</Button>);

    expect(container).toMatchSnapshot();
  });
});
