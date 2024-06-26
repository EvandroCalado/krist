import { FC } from 'react';

import { Heading } from 'components';

import * as S from './Address.styles';

export interface AddressProps {
  children?: React.ReactNode;
}

export const Address: FC<AddressProps> = ({ children }) => {
  return (
    <S.AddressContainer>
      <Heading as="h3" transform="capitalize" fontWeight="700">
        selecione um endereço de entrega
      </Heading>

      <p>
        se o endereço de entrega estiver na lista abaixo, selecione-o e clique
        em continuar. Se não estiver, adicione um novo.
      </p>

      <S.AddressCard>{children}</S.AddressCard>
    </S.AddressContainer>
  );
};
