import { useState } from 'react';

import { BreadCrumb, Checkbox, ProductFilter } from 'components';

import * as S from './shop.styles';

export const Shop = () => {
  const [category, setCategory] = useState('');

  return (
    <S.Container>
      <BreadCrumb />

      <S.FiltersContainer>
        <S.Filters>
          <ProductFilter name="categorias">
            <Checkbox
              label="homem"
              name="homem"
              checked={category === 'homem'}
              value="homem"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Checkbox
              label="mulher"
              name="mulher"
              checked={category === 'mulher'}
              value="mulher"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Checkbox
              label="kids"
              name="kids"
              checked={category === 'kids'}
              value="kids"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Checkbox
              label="esportivos"
              name="esportivos"
              checked={category === 'esportivos'}
              value="esportivos"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Checkbox
              label="jaquetas"
              name="jaquetas"
              checked={category === 'jaquetas'}
              value="jaquetas"
              onChange={(e) => setCategory(e.target.value)}
            />
          </ProductFilter>
          <ProductFilter name="preços">price</ProductFilter>
          <ProductFilter name="cores">color</ProductFilter>
          <ProductFilter name="tamanhos">size</ProductFilter>
        </S.Filters>
        <div style={{ flex: 5 }}>products</div>
      </S.FiltersContainer>
    </S.Container>
  );
};
