import { Meta, StoryFn } from '@storybook/react';

import { Payment, PaymentProps } from '.';

export default {
  title: 'Components/Payment',
  component: Payment,
  args: {
    children: 'Content of Payment',
  },
} as Meta;

export const Default: StoryFn<PaymentProps> = (args) => <Payment {...args} />;
