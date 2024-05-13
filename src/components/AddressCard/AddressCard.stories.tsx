import { Meta, StoryFn } from '@storybook/react';

import { AddressCard, AddressCardProps } from '.';

export default {
  title: 'Components/AddressCard',
  component: AddressCard,
} as Meta;

export const Default: StoryFn<AddressCardProps> = () => <AddressCard />;
