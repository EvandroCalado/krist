import { Meta, StoryFn } from '@storybook/react';
import { Heart, MoveRight } from 'lucide-react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Secondary: StoryFn<ButtonProps> = (args) => (
  <Button variant="secondary" {...args} />
);

export const WithIcon: StoryFn<ButtonProps> = (args) => (
  <Button icon={<MoveRight size={16} />} {...args} />
);

export const FullWidth: StoryFn<ButtonProps> = (args) => (
  <Button width="100%" {...args} />
);

export const OnlyIcon: StoryFn<ButtonProps> = () => (
  <Button>
    <MoveRight size={16} />
  </Button>
);

export const OnlyIconSecondary: StoryFn<ButtonProps> = () => (
  <Button variant="secondary">
    <Heart size={16} />
  </Button>
);

export const Disabled: StoryFn<ButtonProps> = (args) => (
  <Button disabled {...args} />
);
