import { Meta, StoryFn } from '@storybook/react';

import { Color, ColorProps } from '.';

export default {
  title: 'Components/Color',
  component: Color,
  args: {
    color: 'preto',
    setColor: () => {},
    colorHex: '#000000',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ColorProps> = (args) => <Color {...args} />;
