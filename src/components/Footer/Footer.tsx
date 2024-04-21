import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Twitter,
} from 'lucide-react';

import { Heading, Logo } from 'components';

import * as S from './Footer.styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterTop>
        <S.ShopContainer>
          <Logo isWhite />
          <span>
            <Phone /> +55 11 99999-9999
          </span>
          <span>
            <Mail /> krist@exemplo.com
          </span>
          <span>
            <MapPin /> Rua dos exemplos, 0, São Paulo
          </span>
        </S.ShopContainer>
        <S.InfosContainer>
          <Heading as="h3" fontWeight="700" transform="capitalize">
            informações
          </Heading>

          <span>minha conta</span>
          <span>login</span>
          <span>carrinho</span>
          <span>favoritos</span>
          <span>checkout</span>
        </S.InfosContainer>
        <S.ServicesContainer>
          <Heading as="h3" fontWeight="700" transform="capitalize">
            serviços
          </Heading>

          <span>sobre nós</span>
          <span>carreira</span>
          <span>informações sobre o entrega</span>
          <span>politica de privacidade</span>
          <span>termos & condições</span>
        </S.ServicesContainer>
        <S.SubsContainer>
          <Heading as="h3" fontWeight="700" transform="capitalize">
            newsletter
          </Heading>

          <span>inscreva-se para receber novidades</span>

          <S.InputContainer>
            <Mail />
            <input type="email" placeholder="seu email" />
            <button>
              <MoveRight color="white" />
            </button>
          </S.InputContainer>
        </S.SubsContainer>
      </S.FooterTop>
      <S.FooterBottom>
        <S.CardsContainer>
          <img src="/badge/visa.png" alt="visa" />
          <img src="/badge/master.png" alt="master" />
          <img src="/badge/googleplay.png" alt="googleplay" />
          <img src="/badge/appleplay.png" alt="appleplay" />
          <img src="/badge/paypal.png" alt="paypal" />
        </S.CardsContainer>
        <S.Year>
          &copy; {new Date().getFullYear()} Krist todos os direitos reservados
        </S.Year>
        <S.Socials>
          <Facebook color="white" />
          <Instagram color="white" />
          <Twitter color="white" />
        </S.Socials>
      </S.FooterBottom>
    </S.Footer>
  );
};
