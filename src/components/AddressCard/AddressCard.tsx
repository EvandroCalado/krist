import { FilePenLine, Trash2 } from 'lucide-react';
import { FC } from 'react';

import { StrapiAddressType } from 'types';

import * as S from './AddressCard.styles';

export interface AddressCardProps {
  address: StrapiAddressType;
}

export const AddressCard: FC<AddressCardProps> = ({ address }) => {
  return (
    <S.AddressContainer>
      <S.AddressTitle>
        <label htmlFor="address">
          {address.attributes.user.data.attributes.username}
        </label>
        <input type="checkbox" id="address" name="address" />
      </S.AddressTitle>

      <S.AddressDescription>{address.attributes.address}</S.AddressDescription>

      <S.AddressZipcode>CEP: {address.attributes.zipCode}</S.AddressZipcode>

      <S.ButtonContainer>
        <button className="edit">
          <FilePenLine /> editar
        </button>

        <button className="delete">
          <Trash2 /> apagar
        </button>
      </S.ButtonContainer>
    </S.AddressContainer>
  );
};
