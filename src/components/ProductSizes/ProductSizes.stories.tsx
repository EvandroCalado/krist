import { Meta, StoryFn } from '@storybook/react';

import { ProductSizes, ProductSizesProps } from '.';

export default {
  title: 'Components/ProductSizes',
  component: ProductSizes,
  args: {
    sizes: [
      {
        id: 6,
        attributes: {
          name: 'p',
          createdAt: '2024-04-27T20:49:14.264Z',
          updatedAt: '2024-04-27T20:49:16.560Z',
          publishedAt: '2024-04-27T20:49:16.527Z',
        },
      },
      {
        id: 7,
        attributes: {
          name: 'm',
          createdAt: '2024-04-27T20:49:35.467Z',
          updatedAt: '2024-04-27T20:49:37.846Z',
          publishedAt: '2024-04-27T20:49:37.813Z',
        },
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductSizesProps> = (args) => (
  <ProductSizes {...args} />
);
