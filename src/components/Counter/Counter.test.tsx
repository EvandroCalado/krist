import { act } from 'react-dom/test-utils';

import { render, screen } from 'utils/test-utils';

import { Counter } from './Counter';

describe('Counter', () => {
  it('should render counter', () => {
    act(() => {
      render(<Counter />);
    });

    const counter = screen.getByText(/count:/i);
    const button = screen.getByRole('button');

    expect(counter).toHaveTextContent('0');

    act(() => {
      button.click();
    });

    expect(counter).toHaveTextContent('1');
  });
});
