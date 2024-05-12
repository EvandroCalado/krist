import { LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import {
  BreadCrumb,
  Button,
  Checkbox,
  Color,
  ProductFilter,
  ProductsList,
  Range,
} from 'components';
import {
  StrapiCategoriesType,
  StrapiColorsType,
  StrapiProductsType,
  StrapiSizesType,
} from 'types';

import * as S from './Shop.styles';

export const Shop = () => {
  const { products, categories, colors, sizes } = useLoaderData() as {
    products: StrapiProductsType;
    colors: StrapiColorsType;
    categories: StrapiCategoriesType;
    sizes: StrapiSizesType;
  };

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [category, setCategory] = useState(queryParams.get('category') || '');
  const [price, setPrice] = useState(Number(queryParams.get('color')) || 0);
  const [color, setColor] = useState(queryParams.get('color') || '');
  const [size, setSize] = useState(queryParams.get('size') || '');

  return (
    <S.Container>
      <BreadCrumb />

      <S.FiltersContainer>
        <S.Filters method="get">
          <ProductFilter name="categorias" isOpen={!!category}>
            {categories.data.map((currentCategory) => (
              <Checkbox
                key={currentCategory.id}
                label={currentCategory.attributes.name}
                name="category"
                checked={category === currentCategory.attributes.name}
                value={currentCategory.attributes.name}
                onChange={(e) => setCategory(e.target.value)}
              />
            ))}
          </ProductFilter>

          <ProductFilter name="preços" isOpen={!!price && price > 0}>
            <Range price={price} setPrice={setPrice} name="price" />
          </ProductFilter>

          <ProductFilter name="cores" isOpen={!!color}>
            {colors.data.map((currentColor) => (
              <Color
                key={currentColor.id}
                color={color}
                label={currentColor.attributes.name}
                name="color"
                checked={color === currentColor.attributes.name}
                value={currentColor.attributes.name}
                onChange={(e) => setColor(e.target.value)}
                colorHex={currentColor.attributes.color!}
              />
            ))}
          </ProductFilter>

          <ProductFilter name="tamanhos" isOpen={!!size}>
            {sizes.data.map((currentSize) => (
              <Checkbox
                key={currentSize.id}
                label={currentSize.attributes.name}
                name="size"
                checked={size === currentSize.attributes.name}
                value={currentSize.attributes.name}
                onChange={(e) => setSize(e.target.value)}
              />
            ))}
          </ProductFilter>

          <S.ButtonContainer>
            <Button type="submit">aplicar</Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/shop')}
            >
              limpar
            </Button>
          </S.ButtonContainer>
        </S.Filters>

        <S.Products>
          <S.ProductsHeader>
            <LayoutGrid size={16} /> total de produtos {products.data.length}
          </S.ProductsHeader>

          <ProductsList />
        </S.Products>
      </S.FiltersContainer>
    </S.Container>
  );
};
