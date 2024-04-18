import { Meta, StoryFn } from '@storybook/react';

import { ProductCard, ProductCardProps } from '.';

const product = {
  id: 1,
  cover: '/products/camiseta/1.webp',
  title: 'camiseta',
  resume: 'camiseta cinza manga curta',
  price: 59.99,
  discount: 15,
};

export default {
  title: 'Components/ProductCard',
  args: {
    ...product,
  },
  component: ProductCard,
} as Meta;

export const Default: StoryFn<ProductCardProps> = (args) => (
  <ProductCard {...args} />
);
