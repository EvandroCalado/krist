import { Meta, StoryFn } from '@storybook/react';

import { ProductImages, ProductImagesProps } from '.';

export default {
  title: 'Components/ProductImages',
  component: ProductImages,
} as Meta;

export const Default: StoryFn<ProductImagesProps> = () => <ProductImages />;
