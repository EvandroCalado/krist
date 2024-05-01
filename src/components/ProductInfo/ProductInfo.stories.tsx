import { Meta, StoryFn } from '@storybook/react';

import { ProductInfo, ProductInfoProps } from '.';

export default {
  title: 'Components/ProductInfo',
  component: ProductInfo,
  args: {
    colors: {
      data: [
        {
          id: 10,
          attributes: {
            name: 'vermelho',
            color: '#dc6260',
            createdAt: '2024-04-27T20:10:41.005Z',
            updatedAt: '2024-04-29T03:26:49.309Z',
            publishedAt: '2024-04-27T20:10:43.394Z',
          },
        },
        {
          id: 1,
          attributes: {
            name: 'amarelo',
            color: '#e3d14c',
            createdAt: '2024-04-27T20:07:28.005Z',
            updatedAt: '2024-04-29T03:25:43.679Z',
            publishedAt: '2024-04-27T20:07:30.474Z',
          },
        },
        {
          id: 2,
          attributes: {
            name: 'azul',
            color: '#428cbe',
            createdAt: '2024-04-27T20:08:03.805Z',
            updatedAt: '2024-04-29T03:25:55.464Z',
            publishedAt: '2024-04-27T20:08:07.850Z',
          },
        },
        {
          id: 4,
          attributes: {
            name: 'branco',
            color: '#ffffff',
            createdAt: '2024-04-27T20:08:48.745Z',
            updatedAt: '2024-04-27T20:08:51.425Z',
            publishedAt: '2024-04-27T20:08:51.389Z',
          },
        },
      ],
    },
    sizes: {
      data: [
        {
          id: 10,
          attributes: {
            name: 'vermelho',
            color: '#dc6260',
            createdAt: '2024-04-27T20:10:41.005Z',
            updatedAt: '2024-04-29T03:26:49.309Z',
            publishedAt: '2024-04-27T20:10:43.394Z',
          },
        },
        {
          id: 1,
          attributes: {
            name: 'amarelo',
            color: '#e3d14c',
            createdAt: '2024-04-27T20:07:28.005Z',
            updatedAt: '2024-04-29T03:25:43.679Z',
            publishedAt: '2024-04-27T20:07:30.474Z',
          },
        },
        {
          id: 2,
          attributes: {
            name: 'azul',
            color: '#428cbe',
            createdAt: '2024-04-27T20:08:03.805Z',
            updatedAt: '2024-04-29T03:25:55.464Z',
            publishedAt: '2024-04-27T20:08:07.850Z',
          },
        },
        {
          id: 4,
          attributes: {
            name: 'branco',
            color: '#ffffff',
            createdAt: '2024-04-27T20:08:48.745Z',
            updatedAt: '2024-04-27T20:08:51.425Z',
            publishedAt: '2024-04-27T20:08:51.389Z',
          },
        },
      ],
    },
  },
} as Meta;

export const Default: StoryFn<ProductInfoProps> = (args) => (
  <ProductInfo {...args} />
);
