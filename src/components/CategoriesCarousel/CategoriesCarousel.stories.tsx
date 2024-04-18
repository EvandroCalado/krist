import { Meta, StoryFn } from '@storybook/react';

import { CategoriesCarousel, CategoriesCarouselProps } from '.';

const categories = [
  {
    title: 'masculino',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'masculino',
  },
  {
    title: 'femenino',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'femenino',
  },
  {
    title: 'unisex',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'unisex',
  },
  {
    title: 'kids',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'kids',
  },
  {
    title: 'esportivo',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'esportivo',
  },
];

export default {
  title: 'Components/CategoriesCarousel',
  component: CategoriesCarousel,
  args: {
    categories,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CategoriesCarouselProps> = (args) => (
  <CategoriesCarousel {...args} />
);