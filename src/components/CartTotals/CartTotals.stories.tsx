import { Meta, StoryFn } from '@storybook/react';

import { CartTotals, CartTotalsProps } from '.';

export default {
  title: 'Components/CartTotals',
  component: CartTotals,
} as Meta;

export const Default: StoryFn<CartTotalsProps> = () => (
  <div style={{ width: '350px' }}>
    <CartTotals />
  </div>
);
