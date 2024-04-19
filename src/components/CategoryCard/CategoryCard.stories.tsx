import { Meta, StoryFn } from '@storybook/react';

import { CategoryCard, CategoryCardProps } from '.';

export default {
  title: 'Components/CategoryCard',
  args: {
    title: 'masculino',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'masculino',
  },
  component: CategoryCard,
} as Meta;

export const Default: StoryFn<CategoryCardProps> = (args) => (
  <div style={{ width: '250px' }}>
    <CategoryCard {...args} />
  </div>
);
