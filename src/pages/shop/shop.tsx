import { useState } from 'react';

import {
  BreadCrumb,
  Button,
  Checkbox,
  Color,
  ProductFilter,
  Range,
} from 'components';

import * as S from './shop.styles';

export const Shop = () => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  return (
    <S.Container>
      <BreadCrumb />

      <S.FiltersContainer>
        <S.Filters method="get">
          <ProductFilter name="categorias">
            <Checkbox
              label="homem"
              name="category"
              checked={category === 'homem'}
              value="homem"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Checkbox
              label="mulher"
              name="category"
              checked={category === 'mulher'}
              value="mulher"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Checkbox
              label="kids"
              name="category"
              checked={category === 'kids'}
              value="kids"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Checkbox
              label="esportivos"
              name="category"
              checked={category === 'esportivos'}
              value="esportivos"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Checkbox
              label="jaquetas"
              name="category"
              checked={category === 'jaquetas'}
              value="jaquetas"
              onChange={(e) => setCategory(e.target.value)}
            />
          </ProductFilter>

          <ProductFilter name="preços">
            <Range price={price} setPrice={setPrice} name="price" />
          </ProductFilter>

          <ProductFilter name="cores">
            <Color
              color={color}
              label="vermelho"
              name="color"
              checked={color === 'vermelho'}
              value="vermelho"
              onChange={(e) => setColor(e.target.value)}
              colorHex="#dc6260"
            />
            <Color
              color={color}
              label="amarelo"
              name="color"
              checked={color === 'amarelo'}
              value="amarelo"
              onChange={(e) => setColor(e.target.value)}
              colorHex="#e3d14c"
            />
            <Color
              color={color}
              label="azul"
              name="color"
              checked={color === 'azul'}
              value="azul"
              onChange={(e) => setColor(e.target.value)}
              colorHex="#428cbe"
            />
            <Color
              color={color}
              label="branco"
              name="color"
              checked={color === 'branco'}
              value="branco"
              onChange={(e) => setColor(e.target.value)}
              colorHex="#ffffff"
            />
          </ProductFilter>

          <ProductFilter name="tamanhos">
            <Checkbox
              label="p"
              name="size"
              checked={size === 'p'}
              value="p"
              onChange={(e) => setSize(e.target.value)}
            />
            <Checkbox
              label="m"
              name="size"
              checked={size === 'm'}
              value="m"
              onChange={(e) => setSize(e.target.value)}
            />
            <Checkbox
              label="g"
              name="size"
              checked={size === 'g'}
              value="g"
              onChange={(e) => setSize(e.target.value)}
            />
          </ProductFilter>

          <S.ButtonContainer>
            <Button type="submit">aplicar</Button>
            <Button type="reset" variant="secondary">
              limpar
            </Button>
          </S.ButtonContainer>
        </S.Filters>

        <div style={{ flex: 5 }}>products</div>
      </S.FiltersContainer>
    </S.Container>
  );
};
