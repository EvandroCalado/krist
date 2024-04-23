import { MoveRight } from 'lucide-react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { Button, Heading } from 'components';
import { StrapiConfigType } from 'types/strapi-config-type';

import '@splidejs/react-splide/css';

import * as S from './Hero.styles';

export const Hero = () => {
  const { config } = useLoaderData() as { config: StrapiConfigType };
  const navigate = useNavigate();

  const { hero } = config.data.attributes;

  return (
    <S.Section>
      <S.Carousel
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 1,
          autoplay: true,
        }}
      >
        {hero.map((heroItem) => (
          <S.CarouselSlide key={heroItem.id}>
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
                  onClick={() => navigate('/store')}
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
          </S.CarouselSlide>
        ))}
      </S.Carousel>
      {/* <S.Container>
        <S.InfoContainer>
          <Heading transform="capitalize" size="lg" as="h2">
            exclusivo
          </Heading>

          <Heading size="3xl" transform="capitalize" fontWeight="800">
            coleção feminina
          </Heading>

          <Heading transform="uppercase" size="lg" as="h2">
            até 40% off
          </Heading>

          <Button
            icon={<MoveRight size={16} />}
            onClick={() => navigate('/store')}
          >
            compre já
          </Button>
        </S.InfoContainer>
        <S.ImageContainer>
          <span className="back"></span>
          <img src="/hero1.png" alt="Hero" />
          <span className="front"></span>
        </S.ImageContainer>
      </S.Container> */}
    </S.Section>
  );
};
