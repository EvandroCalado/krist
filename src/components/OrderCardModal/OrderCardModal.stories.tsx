import { Meta, StoryFn } from '@storybook/react';

import { OrderCardModal, OrderCardModalProps } from '.';

export default {
  title: 'Components/OrderCardModal',
  component: OrderCardModal,
  args: {
    openModal: true,
    setOpenModal: () => {},
    children: <h1>Content of OrderCardModal</h1>,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<OrderCardModalProps> = (args) => (
  <OrderCardModal {...args} />
);
