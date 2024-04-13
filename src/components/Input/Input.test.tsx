import { fireEvent, screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { Input } from '.';

describe('Input', () => {
  it('should render default', () => {
    customRender(<Input type="text" label="username" name="username" />);

    const label = screen.getByText('username');
    const input = screen.getByRole('textbox');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'username');
  });

  it('should render type', () => {
    customRender(<Input type="password" label="password" name="password" />);

    const input = screen.getByLabelText('password');

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should render on change', () => {
    customRender(<Input type="text" label="username" name="username" />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'hello' } });

    expect(input).toHaveValue('hello');
  });

  it('should render to match snapshot', () => {
    const { container } = customRender(
      <Input type="text" label="text" name="text" />,
    );

    expect(container).toMatchSnapshot();
  });
});
