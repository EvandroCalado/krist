import {
  BreadCrumb,
  Heading,
  ProductDetails,
  ProductImages,
  ProductPrice,
  ProductStock,
} from 'components';

import * as S from './Products.styles';

export const Products = () => {
  return (
    <S.Container>
      <BreadCrumb productName="camiseta" />

      <S.Details>
        <ProductImages />
        <ProductDetails>
          <S.Title>
            <Heading as="h1" size="xl" transform="capitalize" fontWeight="700">
              camisa futebol
            </Heading>
            <ProductStock inStock />
          </S.Title>

          <Heading as="h4" transform="capitalize" fontWeight="500">
            camisa futebol para jogadores
          </Heading>

          <div>rating</div>

          <ProductPrice price={100} discount={15} />

          <div>description</div>
          <div>colors</div>
          <div>sizes</div>
          <div>quantity</div>
        </ProductDetails>
      </S.Details>
    </S.Container>
  );
};
