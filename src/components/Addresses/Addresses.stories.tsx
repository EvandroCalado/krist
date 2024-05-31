import { Meta, StoryFn } from '@storybook/react';

import { Addresses, AddressesProps } from '.';

export default {
  title: 'Components/Addresses',
  component: Addresses,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AddressesProps> = () => <Addresses />;
