import { Meta, StoryFn } from '@storybook/react';

import { ProductReviews, ProductReviewsProps } from '.';

export default {
  title: 'Components/ProductReviews',
  component: ProductReviews,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductReviewsProps> = () => <ProductReviews />;
