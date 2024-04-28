import { Meta, StoryFn } from '@storybook/react';

import { ProductPrice, ProductPriceProps } from '.';

export default {
  title: 'Components/ProductPrice',
  component: ProductPrice,
  args: {
    price: 59.99,
    discount: 15,
  },
} as Meta;

export const Default: StoryFn<ProductPriceProps> = (args) => (
  <ProductPrice {...args} />
);
