import { Meta, StoryFn } from '@storybook/react';

import { RelatedProducts, RelatedProductsProps } from '.';

export default {
  title: 'Components/RelatedProducts',
  component: RelatedProducts,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<RelatedProductsProps> = () => <RelatedProducts />;
