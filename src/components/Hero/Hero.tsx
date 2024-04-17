import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button, Heading } from 'components';

import * as S from './Hero.styles';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <S.Section>
      <S.Container>
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
      </S.Container>
    </S.Section>
  );
};
