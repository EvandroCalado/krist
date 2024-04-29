import {
  BreadCrumb,
  Heading,
  ProductDescription,
  ProductDetails,
  ProductImages,
  ProductPrice,
  ProductStock,
} from 'components';

import * as S from './Product.styles';

export const Product = () => {
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

          <ProductDescription description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis perferendis placeat rem culpa est nulla ab. Dolorem exercitationem ut eaque nobis minima unde, nulla reiciendis, repudiandae amet labore, sit voluptates?" />

          <div>colors</div>
          <div>sizes</div>
          <div>quantity</div>
        </ProductDetails>
      </S.Details>
    </S.Container>
  );
};