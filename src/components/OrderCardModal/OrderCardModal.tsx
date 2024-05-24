import { X } from 'lucide-react';
import { FC } from 'react';

import { Heading } from 'components';

import * as S from './OrderCardModal.styles';

export interface OrderCardModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const OrderCardModal: FC<OrderCardModalProps> = ({
  openModal,
  setOpenModal,
  children,
}) => {
  return (
    <S.OrderCardModalContainer openModal={openModal}>
      <S.OrderCardModalBackground>
        <S.OrderCardModalForm>
          <X onClick={() => setOpenModal(!openModal)} />
          <Heading transform="capitalize" fontWeight="700" as="h3">
            avaliar produto
          </Heading>

          {children}
        </S.OrderCardModalForm>
      </S.OrderCardModalBackground>
    </S.OrderCardModalContainer>
  );
};
