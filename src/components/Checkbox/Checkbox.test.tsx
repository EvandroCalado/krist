import { fireEvent, screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { Checkbox } from '.';

describe('Checkbox', () => {
  it('should render default', () => {
    customRender(<Checkbox label="checkbox" name="checkbox" />);

    const label = screen.getByLabelText('checkbox');
    const input = screen.getByRole('checkbox');

    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'checkbox');
    expect(input).toHaveAttribute('type', 'checkbox');
  });

  it('should render on click', () => {
    customRender(<Checkbox label="checkbox" name="checkbox" />);

    const label = screen.getByLabelText('checkbox');
    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();

    fireEvent.click(label);

    expect(input).toBeChecked();
  });

  it('should render a snapshot', () => {
    const { container } = customRender(
      <Checkbox label="checkbox" name="checkbox" />,
    );

    expect(container).toMatchSnapshot();
  });
});
