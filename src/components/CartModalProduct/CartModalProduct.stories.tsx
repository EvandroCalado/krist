import { Meta, StoryFn } from '@storybook/react';

import { CartModalProduct, CartModalProductProps } from '.';

export default {
  title: 'Components/CartModalProduct',
  component: CartModalProduct,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CartModalProductProps> = () => (
  <CartModalProduct />
);
