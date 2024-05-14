import { FilePenLine, Trash2 } from 'lucide-react';
import { FC } from 'react';

import * as S from './AddressCard.styles';

export interface AddressCardProps {}

export const AddressCard: FC<AddressCardProps> = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <label htmlFor="address">evandro calado</label>
        <input type="checkbox" id="address" name="address" />
      </S.TitleContainer>

      <S.AddressContainer>
        avenida conselheiro joão alfredo, 3, santa luzia, arcoverde, pernambuco
      </S.AddressContainer>

      <S.ButtonContainer>
        <button className="edit">
          <FilePenLine /> editar
        </button>

        <button className="delete">
          <Trash2 /> apagar
        </button>
      </S.ButtonContainer>
    </S.Container>
  );
};
