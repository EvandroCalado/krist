import { Meta, StoryFn } from '@storybook/react';

import { ProductStock, ProductStockProps } from '.';

export default {
  title: 'Components/ProductStock',
  component: ProductStock,
} as Meta;

export const Default: StoryFn<ProductStockProps> = () => (
  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    <ProductStock inStock />
    <ProductStock inStock={false} />
  </div>
);
