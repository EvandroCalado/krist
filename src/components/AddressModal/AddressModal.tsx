import { X } from 'lucide-react';
import { FC } from 'react';

import { Heading } from 'components/Heading';

import * as S from './AddressModal.styles';

export interface AddressModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const AddressModal: FC<AddressModalProps> = ({
  openModal,
  setOpenModal,
  children,
}) => {
  return (
    <S.AddressContainer openModal={openModal}>
      <S.AddressModalBackground>
        <S.AddressModalForm>
          <X onClick={() => setOpenModal(!openModal)} />
          <Heading transform="capitalize" fontWeight="700" as="h3">
            adicionar endereço
          </Heading>

          {children}
        </S.AddressModalForm>
      </S.AddressModalBackground>
    </S.AddressContainer>
  );
};
