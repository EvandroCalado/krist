import { Meta, StoryFn } from '@storybook/react';

import { CartModal, CartModalProps } from '.';

export default {
  title: 'Components/CartModal',
  component: CartModal,
  args: {
    children: (
      <>
        <div>cart item</div>

        <div className="subtotal">
          <span>subtotal</span>
          <span>R$200.00</span>
        </div>
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CartModalProps> = (args) => (
  <CartModal {...args} />
);
