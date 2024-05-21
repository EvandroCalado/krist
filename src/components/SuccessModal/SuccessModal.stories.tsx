import { Meta, StoryFn } from '@storybook/react';

import { SuccessModal, SuccessModalProps } from '.';

export default {
  title: 'Components/SuccessModal',
  component: SuccessModal,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<SuccessModalProps> = () => <SuccessModal />;
