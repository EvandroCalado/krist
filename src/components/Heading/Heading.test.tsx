import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import theme from 'styles/theme';

import { Heading } from './Heading';

describe('Heading', () => {
  it('should render default', () => {
    customRender(<Heading>Heading</Heading>);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Heading');
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.md,
      'text-transform': 'lowercase',
      'text-align': 'left',
    });
  });

  it('should render transform', () => {
    customRender(<Heading transform="uppercase">Heading</Heading>);

    const heading = screen.getByRole('heading');

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render sizes', () => {
    customRender(<Heading size="lg">Heading</Heading>);

    const heading = screen.getByRole('heading');

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.lg,
    });
  });

  it('should render element correct', () => {
    const { container } = customRender(<Heading as="h3">Heading</Heading>);

    const h3 = container.querySelector('h3')!;

    expect(h3.tagName.toLowerCase()).toBe('h3');
  });

  it('should render with align correct', () => {
    customRender(<Heading align="center">Heading</Heading>);

    const heading = screen.getByRole('heading');

    expect(heading).toHaveStyle({
      'text-align': 'center',
    });
  });

  it('should render to match snapshot', () => {
    const { container } = customRender(<Heading as="h3">Heading</Heading>);

    expect(container).toMatchSnapshot();
  });
});
