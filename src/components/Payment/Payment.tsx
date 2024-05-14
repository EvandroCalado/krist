import { FC } from 'react';

import { Heading } from 'components/Heading';

import * as S from './Payment.styles';

export interface PaymentProps {
  children: React.ReactNode;
}

export const Payment: FC<PaymentProps> = ({ children }) => {
  return (
    <S.Container>
      <Heading as="h3" transform="capitalize" fontWeight="700">
        selecione o meio de pagamento
      </Heading>

      <Heading as="h3" transform="capitalize" fontWeight="700">
        débito/credito
      </Heading>

      {children}
    </S.Container>
  );
};
