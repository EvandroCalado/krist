import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

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
    });
  });

  it('should render transform', () => {
    const { rerender } = customRender(
      <Heading transform="uppercase">Heading</Heading>,
    );

    const heading = screen.getByRole('heading');

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading transform="lowercase">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'text-transform': 'lowercase',
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading transform="capitalize">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'text-transform': 'capitalize',
    });
  });

  it('should render sizes', () => {
    const { rerender } = customRender(<Heading size="lg">Heading</Heading>);

    const heading = screen.getByRole('heading');

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.lg,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="xl">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xl,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="2xl">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes['2xl'],
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="3xl">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes['3xl'],
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="4xl">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes['4xl'],
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="5xl">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes['5xl'],
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="6xl">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes['6xl'],
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="7xl">Heading</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes['7xl'],
    });
  });

  it('should render element correct', () => {
    const { container } = customRender(<Heading as="h3">Heading</Heading>);

    const h3 = container.querySelector('h3')!;

    expect(h3.tagName.toLowerCase()).toBe('h3');
  });

  it('should render to match snapshot', () => {
    const { container } = customRender(<Heading as="h3">Heading</Heading>);

    expect(container).toMatchSnapshot();
  });
});
