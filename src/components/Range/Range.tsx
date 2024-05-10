import { FC } from 'react';

import * as S from './Range.styles';

export interface RangeProps {
  price: number;
  setPrice: (price: number) => void;
}

export const Range: FC<RangeProps> = ({ price, setPrice }) => {
  const maxPrice = 1000;

  return (
    <S.Container>
      <S.Input
        type="range"
        min="{0}"
        max={maxPrice}
        step={1}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <S.Range>
        <span>R${price}</span>
        <span>R$1000</span>
      </S.Range>
    </S.Container>
  );
};
