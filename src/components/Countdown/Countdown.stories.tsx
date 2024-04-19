import { Meta, StoryFn } from '@storybook/react';

import { Countdown, CountdownProps } from '.';

export default {
  title: 'Components/Countdown',
  component: Countdown,
} as Meta;

export const Default: StoryFn<CountdownProps> = () => <Countdown />;
