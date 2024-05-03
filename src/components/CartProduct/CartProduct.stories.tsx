import { Meta, StoryFn } from '@storybook/react';

import { CartProduct, CartProductProps } from '.';

export default {
  title: 'Components/CartProduct',
  component: CartProduct,
} as Meta;

export const Default: StoryFn<CartProductProps> = () => <CartProduct />;
