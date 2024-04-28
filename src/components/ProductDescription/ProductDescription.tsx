import { FC } from 'react';

export interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
  description,
}) => {
  return <p>{description}</p>;
};
