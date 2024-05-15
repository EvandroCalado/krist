import { FC } from 'react';

import * as S from './CategoryCard.styles';

export interface CategoryCardProps {
  title: string;
  image: string;
  buttonLabel: string;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  title,
  image,
  buttonLabel,
}) => {
  return (
    <S.LinkContainer to={`/shop/?category=${title}`}>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Image src={image} alt={title} />
        <S.Span>{buttonLabel}</S.Span>
      </S.Container>
    </S.LinkContainer>
  );
};
