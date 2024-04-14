import { Meta, StoryFn } from '@storybook/react';

import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

export const Default: StoryFn<CheckboxProps> = () => (
  <Checkbox label="checkbox" name="checkbox" />
);
