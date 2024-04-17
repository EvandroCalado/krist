import { Meta, StoryFn } from '@storybook/react';

import { Hero } from '.';

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn = () => <Hero />;
