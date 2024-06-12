import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { Button, Countdown, Heading } from 'components';
import { StrapiFlashSaleType } from 'types';

import * as S from './FlashSale.styles';

export const FlashSale = () => {
  const [isFinish, setIsFinish] = useState(false);

  const { flashSale } = useLoaderData() as { flashSale: StrapiFlashSaleType };

  const navigate = useNavigate();

  if (!flashSale || !flashSale.data || flashSale.data.length === 0) return null;

  const { title, description, product, date, button } =
    flashSale.data[0].attributes;

  const { cover } = product.data.attributes;

  const isIcon = button[0]?.icon ? <MoveRight size={16} /> : '';

  return (
    <S.Container>
      <S.SaleContainer>
        <Heading transform="capitalize" size="4xl" as="h2" fontWeight="600">
          {title}
        </Heading>
        <S.Description>{description}</S.Description>
        <Countdown date={date} setIsFinish={setIsFinish} />
        <Button
          onClick={() => navigate(`/shop/product/${product.data.id}`)}
          icon={isIcon}
          disabled={isFinish}
        >
          {isFinish ? 'esgotado' : button[0]?.label}
        </Button>
      </S.SaleContainer>

      <S.ImageContainer>
        {cover?.data?.attributes && (
          <>
            <img src={cover.data.attributes.url} alt={title} />
            <span className="front"></span>
            <span className="back"></span>
          </>
        )}
      </S.ImageContainer>
    </S.Container>
  );
};
