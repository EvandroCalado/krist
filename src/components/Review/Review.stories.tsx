import { Meta, StoryFn } from '@storybook/react';

import { Review, ReviewProps } from '.';

export default {
  title: 'Components/Review',
  component: Review,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ReviewProps> = () => <Review />;
