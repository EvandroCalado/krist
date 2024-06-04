import { Meta, StoryFn } from '@storybook/react';

import { Search, SearchProps } from '.';

export default {
  title: 'Components/Search',
  component: Search,
} as Meta;

export const Default: StoryFn<SearchProps> = () => <Search />;
