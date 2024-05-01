import { Meta, StoryFn } from '@storybook/react';

import { ProductTabs, ProductTabsProps } from '.';

export default {
  title: 'Components/ProductTabs',
  component: ProductTabs,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductTabsProps> = () => <ProductTabs />;
