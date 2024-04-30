import { Meta, StoryFn } from '@storybook/react';

import { ProductQuantity, ProductQuantityProps } from '.';

export default {
  title: 'Components/ProductQuantity',
  component: ProductQuantity,
  args: {
    quantity: 1,
    setQuantity: () => {},
  },
} as Meta;

export const Default: StoryFn<ProductQuantityProps> = (args) => (
  <ProductQuantity {...args} />
);
