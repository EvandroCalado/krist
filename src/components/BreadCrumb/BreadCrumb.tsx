import { ChevronRight } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import * as S from './BreadCrumb.styles';

export interface BreadCrumbProps {
  productName?: string;
}

export const BreadCrumb: FC<BreadCrumbProps> = ({ productName }) => {
  return (
    <S.Container>
      <Link to="/">
        home <ChevronRight />
      </Link>

      <Link to="/shop">shop {productName && <ChevronRight />}</Link>

      <span>{productName}</span>
    </S.Container>
  );
};
