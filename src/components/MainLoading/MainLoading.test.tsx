import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { MainLoading } from '.';

describe('MainLoading', () => {
  it('should render default', () => {
    customRender(<MainLoading />);

    const svg = screen.getByTestId('svg');
    const span = screen.getByText('Carregando...');

    expect(svg).toBeInTheDocument();
    expect(span).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = customRender(<MainLoading />);

    expect(container).toMatchSnapshot();
  });
});
