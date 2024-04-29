import { Meta, StoryFn } from '@storybook/react';

import { ProductColors, ProductColorsProps } from '.';

export default {
  title: 'Components/ ProductColors',
  component: ProductColors,
  args: {
    colors: [],
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductColorsProps> = (args) => (
  <ProductColors {...args} />
);
