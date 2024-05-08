import { Link, useLoaderData } from 'react-router-dom';

import { StrapiConfigType } from 'types/strapi-config-type';

import * as S from './Logo.styles';

export const Logo = () => {
  const { config } = useLoaderData() as { config: StrapiConfigType };

  const { black } = config.data.attributes.logo;

  return (
    <Link to="/">
      <S.Logo src={black.data.attributes.url} alt="logo" />
    </Link>
  );
};
