import { Meta, StoryFn } from '@storybook/react';

import { FlashSale } from '.';

export default {
  title: 'Components/FlashSale',
  component: FlashSale,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn = () => <FlashSale />;
