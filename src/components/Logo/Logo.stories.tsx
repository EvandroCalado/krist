import { Meta, StoryFn } from '@storybook/react';

import { Logo } from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

export const Default: StoryFn = () => <Logo />;
