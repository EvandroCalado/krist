import { FC } from 'react';

import * as S from './ProductTabs.styles';

export interface ProductTabsProps {
  children?: React.ReactNode;
  setActiveTab: (tab: string) => void;
}

export const ProductTabs: FC<ProductTabsProps> = ({
  children,
  setActiveTab,
}) => {
  return (
    <S.Container>
      <S.ButtonContainer>
        <S.Button onClick={() => setActiveTab('description')}>
          descrição
        </S.Button>
        <S.Button onClick={() => setActiveTab('info')}>
          informações adicionais
        </S.Button>
        <S.Button onClick={() => setActiveTab('reviews')}>avaliações</S.Button>
      </S.ButtonContainer>
      {children}
    </S.Container>
  );
};
