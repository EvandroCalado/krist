import { Meta, StoryFn } from '@storybook/react';

import { Steps, StepsProps } from '.';

export default {
  title: 'Components/Steps',
  component: Steps,
} as Meta;

export const Default: StoryFn<StepsProps> = () => <Steps />;
