import { Meta, StoryFn } from '@storybook/react';

import { ProductRating, ProductRatingProps } from '.';

export default {
  title: 'Components/ProductRating',
  component: ProductRating,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductRatingProps> = () => <ProductRating />;
