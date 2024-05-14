import { Meta, StoryFn } from '@storybook/react';

import { AddressModal, AddressModalProps } from '.';

export default {
  title: 'Components/AddressModal',
  component: AddressModal,
  args: {
    openModal: true,
    setOpenModal: () => {},
    children: 'Content of AddressModal',
  },
} as Meta;

export const Default: StoryFn<AddressModalProps> = (args) => (
  <AddressModal {...args} />
);
