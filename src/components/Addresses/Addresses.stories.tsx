import { Meta } from '@storybook/react';

import { Addresses } from '.';

export default {
  title: 'Components/Addresses',
  component: Addresses,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Addresses />;
