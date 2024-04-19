import { Meta, StoryFn } from '@storybook/react';

import { Services } from '.';

export default {
  title: 'Components/ServiceCard',
  component: Services,
} as Meta;

export const Default: StoryFn = () => <Services />;
