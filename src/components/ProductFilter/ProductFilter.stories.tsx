import { Meta, StoryFn } from '@storybook/react';

import { ProductFilter, ProductFilterProps } from './ProductFilter';

export default {
  title: 'Components/ProductFilter',
  component: ProductFilter,
  args: {
    children: 'Content of Product Categories Filter',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductFilterProps> = (args) => (
  <ProductFilter {...args} />
);
