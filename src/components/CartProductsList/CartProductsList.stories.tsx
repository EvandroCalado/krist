import { Meta, StoryFn } from '@storybook/react';

import { CartProduct } from 'components';

import { CartProductsList, CartProductsListProps } from '.';

export default {
  title: 'Components/CartProductsList',
  component: CartProductsList,
  args: {
    children: (
      <>
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CartProductsListProps> = (args) => (
  <CartProductsList {...args} />
);
