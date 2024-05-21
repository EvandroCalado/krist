import { ShoppingBag } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Heading } from 'components';

import * as S from './SuccessModal.styles';

export interface SuccessModalProps {
  successModal?: boolean;
}

export const SuccessModal: FC<SuccessModalProps> = ({ successModal }) => {
  const navigate = useNavigate();

  if (!successModal) return null;

  return (
    <S.SuccessModalContainer>
      <S.SuccessModal>
        <S.SuccessModalIcon>
          <ShoppingBag />
        </S.SuccessModalIcon>

        <Heading as="h3" transform="capitalize" fontWeight="700">
          seu pedido foi realizado!
        </Heading>

        <Heading as="h5" size="sm">
          obrigado por comprar na nossa loja! Em breve enviaremos o seu pedido,
          mas se tiver alguma dívida entre em contato conosco.
        </Heading>

        <S.SuccessModalButtons>
          <Button onClick={() => navigate('/orders')}>ver pedido</Button>
          <Button onClick={() => navigate('/')} variant="secondary">
            voltar para home
          </Button>
        </S.SuccessModalButtons>
      </S.SuccessModal>
    </S.SuccessModalContainer>
  );
};
