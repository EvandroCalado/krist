import { Meta, StoryFn } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

export const Headings: StoryFn<HeadingProps> = () => (
  <div style={{ display: 'flex', gap: '6rem', flexWrap: 'wrap' }}>
    <div>
      <Heading size="6xl" transform="capitalize">
        Heading
      </Heading>
      <Heading as="h2" size="5xl" transform="capitalize">
        Heading
      </Heading>
      <Heading as="h3" size="4xl" transform="capitalize">
        Heading
      </Heading>
      <Heading as="h4" size="3xl" transform="capitalize">
        Heading
      </Heading>
      <Heading as="h5" size="2xl" transform="capitalize">
        Heading
      </Heading>
      <Heading as="h6" size="xl" transform="capitalize">
        Heading
      </Heading>
    </div>
    <div>
      <Heading size="6xl">Heading</Heading>
      <Heading as="h2" size="5xl">
        Heading
      </Heading>
      <Heading as="h3" size="4xl">
        Heading
      </Heading>
      <Heading as="h4" size="3xl">
        Heading
      </Heading>
      <Heading as="h5" size="2xl">
        Heading
      </Heading>
      <Heading as="h6" size="xl">
        Heading
      </Heading>
    </div>
    <div>
      <Heading size="6xl" transform="uppercase">
        Heading
      </Heading>
      <Heading as="h2" size="5xl" transform="uppercase">
        Heading
      </Heading>
      <Heading as="h3" size="4xl" transform="uppercase">
        Heading
      </Heading>
      <Heading as="h4" size="3xl" transform="uppercase">
        Heading
      </Heading>
      <Heading as="h5" size="2xl" transform="uppercase">
        Heading
      </Heading>
      <Heading as="h6" size="xl" transform="uppercase">
        Heading
      </Heading>
    </div>
  </div>
);
