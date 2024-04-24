import { useLoaderData } from 'react-router-dom';

import { StrapiConfigType } from 'types/strapi-config-type';

import * as S from './MenuNav.styles';

export const MenuNav = () => {
  const { config } = useLoaderData() as { config: StrapiConfigType };

  const { navLinks } = config.data.attributes;

  return (
    <S.Nav className="menu-nav">
      {navLinks.map((link) => (
        <S.Navlink key={link.id} to={link.link}>
          {link.name}
        </S.Navlink>
      ))}
    </S.Nav>
  );
};
