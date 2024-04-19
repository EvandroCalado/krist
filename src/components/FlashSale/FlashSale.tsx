import { MoveRight } from 'lucide-react';

import { Button, Countdown, Heading } from 'components';

import * as S from './FlashSale.styles';

export const FlashSale = () => {
  return (
    <S.Container>
      <S.SaleContainer>
        <Heading transform="capitalize" size="5xl" as="h2" fontWeight="600">
          oferta de hoje
        </Heading>

        <S.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          dicta quos ipsa iste nostrum. Ipsum, itaque exercitationem adipisci
          soluta saepe, id eos voluptas tempora in delectus doloremque deserunt
          quibusdam quam.
        </S.Description>

        <Countdown />

        <Button icon={<MoveRight size={16} />}>ver produto</Button>
      </S.SaleContainer>

      <S.ImageContainer>
        <img src="/flash.webp" alt="flash sale" />
      </S.ImageContainer>
    </S.Container>
  );
};
