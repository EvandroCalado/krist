import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { Color } from '.';

describe('Color', () => {
  it('should render default', () => {
    customRender(<Color color="preto" label="preto" colorHex="#000" />);

    const color = screen.getByTestId('color');
    const input = screen.getByTestId('checkbox');
    const label = screen.getByText('preto');

    expect(color).toBeInTheDocument();
    expect(color).toHaveStyle({
      'background-color': '#000',
    });
    expect(color).toHaveClass('active');

    expect(input).toHaveStyle({
      display: 'none',
      visibility: 'hidden',
    });

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('preto');
  });

  it('should render not active', () => {
    customRender(<Color color="preto" label="branco" colorHex="#000" />);

    const color = screen.getByTestId('color');

    expect(color).not.toHaveClass('active');
  });

  it('should render a snapshot', () => {
    const { container } = customRender(
      <Color color="preto" label="preto" colorHex="#000" />,
    );

    expect(container).toMatchSnapshot();
  });
});
