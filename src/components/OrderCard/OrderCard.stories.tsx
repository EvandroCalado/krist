import { Meta, StoryFn } from '@storybook/react';

import { OrderCard, OrderCardProps } from '.';

export default {
  title: 'Components/OrderCard',
  component: OrderCard,
} as Meta;

export const Default: StoryFn<OrderCardProps> = () => <OrderCard />;
