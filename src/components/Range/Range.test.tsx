import { fireEvent, screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { Range } from '.';

describe('Range', () => {
  it('should render default', () => {
    customRender(<Range price={0} setPrice={() => {}} />);

    const input = screen.getByRole('slider');
    const price = screen.getByText('R$0');
    const total = screen.getByText('R$1000');

    expect(input).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent('R$0');
    expect(total).toBeInTheDocument();
    expect(total).toHaveTextContent('R$1000');
  });

  it('should change price', () => {
    const mockSetPrice = jest.fn();

    jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useState: () => [0, mockSetPrice],
    }));

    customRender(<Range price={0} setPrice={mockSetPrice} />);

    const input = screen.getByRole('slider');

    fireEvent.change(input, { target: { value: 50 } });

    expect(mockSetPrice).toHaveBeenCalledWith(50);
  });

  it('should render a snapshot', () => {
    const { container } = customRender(<Range price={0} setPrice={() => {}} />);

    expect(container).toMatchSnapshot();
  });
});
