import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Twitter,
} from 'lucide-react';
import { Link, useLoaderData } from 'react-router-dom';

import { Heading, Logo } from 'components';
import { StrapiConfigType } from 'types';

import * as S from './Footer.styles';

export const Footer = () => {
  const { config } = useLoaderData() as {
    config: StrapiConfigType;
  };

  const { footerMenu } = config.data.attributes;
  const { address, email, phone } = config.data.attributes.footer;

  return (
    <S.Footer>
      <S.FooterTop>
        <S.ShopContainer>
          <Logo isBlack={false} />
          <span>
            <Phone /> +55 {phone}
          </span>
          <span>
            <Mail /> {email}
          </span>
          <span>
            <MapPin /> {address}
          </span>
        </S.ShopContainer>

        {footerMenu.map((footerItem) => (
          <S.InfosContainer key={footerItem.id}>
            <Heading as="h3" fontWeight="700" transform="capitalize">
              {footerItem.title}
            </Heading>

            {footerItem.links.map((item) => (
              <Link key={item.id} to={item.link}>
                {item.name}
              </Link>
            ))}
          </S.InfosContainer>
        ))}

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
