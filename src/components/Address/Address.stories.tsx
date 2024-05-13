import { Meta, StoryFn } from '@storybook/react';

import { Address, AddressProps } from '.';

export default {
  title: 'Components/Address',
  component: Address,
  args: {
    children: 'Content of Address',
  },
} as Meta;

export const Default: StoryFn<AddressProps> = (args) => <Address {...args} />;
