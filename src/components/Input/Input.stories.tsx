import { Meta, StoryFn } from '@storybook/react';

import { Input, InputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

export const Text: StoryFn<InputProps> = () => (
  <Input type="text" label="text" name="text" />
);

export const Password: StoryFn<InputProps> = () => (
  <Input type="password" label="password" name="password" />
);

export const Number: StoryFn<InputProps> = () => (
  <Input type="number" label="number" name="number" />
);

export const Disabled: StoryFn<InputProps> = () => (
  <Input type="text" label="disabled" name="disabled" disabled />
);
