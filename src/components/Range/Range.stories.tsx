import { Meta, StoryFn } from '@storybook/react';

import { Range, RangeProps } from '.';

export default {
  title: 'Components/Range',
  component: Range,
  args: {
    price: 0,
    setPrice: () => {},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<RangeProps> = (ars) => <Range {...ars} />;
