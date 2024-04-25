import { Meta, StoryFn } from '@storybook/react';

import { MainLoading } from '.';

export default {
  title: 'Components/MainLoading',
  component: MainLoading,
} as Meta;

export const Default: StoryFn = () => <MainLoading />;
