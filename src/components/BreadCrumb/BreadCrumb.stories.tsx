import { Meta, StoryFn } from '@storybook/react';

import { BreadCrumb, BreadCrumbProps } from '.';

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  args: {
    productName: 'camiseta',
  },
} as Meta;

export const Default: StoryFn<BreadCrumbProps> = (args) => (
  <BreadCrumb {...args} />
);
