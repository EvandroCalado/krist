import { Meta, StoryFn } from '@storybook/react';

import { ProductsList, ProductsListProps } from '.';

export const products = [
  {
    id: 1,
    cover: '/products/blusa/1.webp',
    title: 'blusa',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 2,
    cover: '/products/camiseta/1.webp',
    title: 'camiseta',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 3,
    cover: '/products/cropped/1.webp',
    title: 'cropped',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 4,
    cover: '/products/regata/1.webp',
    title: 'regata',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 5,
    cover: '/products/top/1.webp',
    title: 'top',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 6,
    cover: '/products/blusa/1.webp',
    title: 'blusa',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 7,
    cover: '/products/cropped/1.webp',
    title: 'cropped',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 8,
    cover: '/products/regata/1.webp',
    title: 'regata',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 9,
    cover: '/products/top/1.webp',
    title: 'top',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 10,
    cover: '/products/camiseta/1.webp',
    title: 'camiseta',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
];

export default {
  title: 'Components/ProductsList',
  component: ProductsList,
  args: {
    products,
  },
} as Meta;

export const Default: StoryFn<ProductsListProps> = (args) => (
  <ProductsList {...args} />
);
