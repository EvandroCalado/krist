import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { StrapiConfigType } from 'types/strapi-config-type';

import * as S from './Logo.styles';

export interface LogoProps {
  isBlack?: boolean;
}

export const Logo: FC<LogoProps> = ({ isBlack = true }) => {
  const { config } = useLoaderData() as { config: StrapiConfigType };

  const { black, white } = config.data.attributes.logo;

  return (
    <Link to="/">
      <S.Logo
        src={isBlack ? black.data.attributes.url : white.data.attributes.url}
        alt="logo"
      />
    </Link>
  );
};
