import { Meta, StoryFn } from '@storybook/react';

import { ProductDetails, ProductDetailsProps } from '.';

export default {
  title: 'Components/ProductDetails',
  component: ProductDetails,
  args: {
    children: 'Content of Product Details',
  },
} as Meta;

export const Default: StoryFn<ProductDetailsProps> = (args) => (
  <ProductDetails {...args} />
);
