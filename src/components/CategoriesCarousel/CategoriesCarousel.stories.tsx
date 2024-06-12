import { Meta } from '@storybook/react';

import { CategoriesCarousel } from '.';

export default {
  title: 'Components/CategoriesCarousel',
  component: CategoriesCarousel,

  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <CategoriesCarousel />;
