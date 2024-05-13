import { FC } from 'react';

import { Heading } from 'components';

import * as S from './Address.styles';

export interface AddressProps {
  children?: React.ReactNode;
}

export const Address: FC<AddressProps> = ({ children }) => {
  return (
    <S.Container>
      <Heading as="h3" transform="capitalize" fontWeight="700">
        selecione um endereço de entrega
      </Heading>

      <p>
        se o endereço de entrega não estiver na lista abaixo, selecione-o e
        clique em continuar. Se não estiver, clique em adicionar.
      </p>

      <S.CardContainer>{children}</S.CardContainer>
    </S.Container>
  );
};
