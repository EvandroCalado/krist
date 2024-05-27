import { Meta, StoryFn } from '@storybook/react';

import { Wishlist, WishlistProps } from '.';

export default {
  title: 'Components/Wishlist',
  component: Wishlist,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<WishlistProps> = () => <Wishlist />;
