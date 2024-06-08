import { screen } from '@testing-library/react';

import { customRender } from 'utils/test-utils';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render default', () => {
    customRender(<Checkbox label="checkbox" name="checkbox" />);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('name', 'checkbox');
    expect(checkbox).toHaveAttribute('id', 'checkbox');
    expect(label).toBeInTheDocument();
  });

  it('should render with pass attribute', () => {
    customRender(
      <Checkbox label="checkbox" name="checkbox" placeholder="test" />,
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('placeholder', 'test');
  });

  it('should render a snapshot', () => {
    const { container } = customRender(
      <Checkbox label="checkbox" name="checkbox" placeholder="test" />,
    );

    expect(container).toMatchSnapshot();
  });
});
