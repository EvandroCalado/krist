import { Meta, StoryFn } from '@storybook/react';

import { ProductDescription, ProductDescriptionProps } from '.';

export default {
  title: 'Components/ProductDescription',
  component: ProductDescription,
  args: {
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis perferendis placeat rem culpa est nulla ab. Dolorem exercitationem ut eaque nobis minima unde, nulla reiciendis, repudiandae amet labore, sit voluptates?',
  },
} as Meta;

export const Default: StoryFn<ProductDescriptionProps> = (args) => (
  <ProductDescription {...args} />
);
