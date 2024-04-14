import { Meta, StoryFn } from '@storybook/react';
import { Heart, MoveRight } from 'lucide-react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Buttons: StoryFn<ButtonProps> = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Button>primary</Button>

    <Button variant="secondary">secondary</Button>

    <Button variant="secondary">
      <MoveRight size={16} />
    </Button>

    <Button>
      <MoveRight size={16} />
    </Button>

    <Button variant="secondary">
      <Heart size={16} />
    </Button>

    <Button disabled>disabled</Button>

    <Button width="100%">full width</Button>
  </div>
);
