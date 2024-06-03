import { Meta, StoryFn } from '@storybook/react';

import { Pagination, PaginationProps } from '.';

export default {
  title: 'Components/Pagination',
  args: {
    page: 1,
    pageCount: 10,
    setCurrentPage: () => {},
  },
  component: Pagination,
} as Meta;

export const Default: StoryFn<PaginationProps> = (args) => (
  <Pagination {...args} />
);
