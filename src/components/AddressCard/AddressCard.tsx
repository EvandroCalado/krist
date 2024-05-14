import { FilePenLine, Trash2 } from 'lucide-react';
import { FC } from 'react';

import { StrapiAddressType } from 'types';

import * as S from './AddressCard.styles';

export interface AddressCardProps {
  address: StrapiAddressType;
}

export const AddressCard: FC<AddressCardProps> = ({ address }) => {
  return (
    <S.AddressCardContainer>
      <S.AddressCardTitle>
        <label htmlFor="address">
          {address.attributes.user.data.attributes.username}
        </label>
        <input type="checkbox" id="address" name="address" />
      </S.AddressCardTitle>

      <S.AddressCardName>{address.attributes.title}</S.AddressCardName>

      <S.AddressCardDescription>
        {address.attributes.address}
      </S.AddressCardDescription>

      <S.AddressCardZipcode>
        CEP: {address.attributes.zipCode}
      </S.AddressCardZipcode>

      <S.AddressCardButtons>
        <button className="edit">
          <FilePenLine /> editar
        </button>

        <button className="delete">
          <Trash2 /> apagar
        </button>
      </S.AddressCardButtons>
    </S.AddressCardContainer>
  );
};
