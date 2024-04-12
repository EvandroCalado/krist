import { Meta, StoryFn } from '@storybook/react';

import { Counter } from '.';

export default {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn = () => <Counter />;
