import { Meta, StoryFn } from '@storybook/react';

import { Input, InputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

export const Inputs: StoryFn<InputProps> = () => (
  <div style={{ display: 'flex', gap: '6rem', flexWrap: 'wrap' }}>
    <Input type="text" label="text" name="text" />
    <Input type="email" label="email" name="email" />
    <Input type="password" label="password" name="password" />
    <Input type="number" label="number" name="number" />
    <Input type="text" label="disabled" name="disabled" disabled />
  </div>
);
