// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { MoveRight } from 'lucide-react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { Button, Heading } from 'components';
import { StrapiConfigType } from 'types';

import '@splidejs/react-splide/css';

import * as S from './Hero.styles';

export const Hero = () => {
  const { config } = useLoaderData() as { config: StrapiConfigType };
  const navigate = useNavigate();

  const { hero } = config.data.attributes;

  return (
    <S.Section>
      <Splide
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 1,
          autoplay: true,
        }}
      >
        {hero.map((heroItem) => (
          <SplideSlide key={heroItem.id}>
            <S.Container>
              <S.InfoContainer>
                <Heading transform="capitalize" size="2xl" as="h2">
                  {heroItem.subTitle}
                </Heading>

                <Heading size="5xl" transform="capitalize" fontWeight="800">
                  {heroItem.title}
                </Heading>

                <Heading transform="uppercase" size="2xl" as="h2">
                  {heroItem.off}
                </Heading>

                <Button
                  icon={<MoveRight size={16} />}
                  onClick={() => navigate('/shop')}
                >
                  {heroItem.button.label}
                </Button>
              </S.InfoContainer>
              <S.ImageContainer>
                <span className="back"></span>
                <img src={heroItem.banner.data.attributes.url} alt="Hero" />
                <span className="front"></span>
              </S.ImageContainer>
            </S.Container>
          </SplideSlide>
        ))}
      </Splide>
    </S.Section>
  );
};
