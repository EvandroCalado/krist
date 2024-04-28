import { BreadCrumb, ProductImages } from 'components';

import * as S from './Products.styles';

export const Products = () => {
  return (
    <S.Container>
      <BreadCrumb productName="camiseta" />

      <S.Details>
        <ProductImages />
        <div style={{ width: '100%' }}>info</div>
      </S.Details>
    </S.Container>
  );
};
