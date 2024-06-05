import { FC } from 'react';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

import { Button, Heading } from 'components';

import * as S from './Error.styles';

export interface ErrorProps {}

export const Error: FC<ErrorProps> = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <S.ErrorContainer>
        <Heading size="4xl" fontWeight="700" transform="capitalize">
          {error.status}
        </Heading>
        <Heading as="h3" size="xl" fontWeight="700" transform="capitalize">
          {error.data}
        </Heading>

        <Button onClick={() => navigate('/')}>ir para home</Button>
      </S.ErrorContainer>
    );
  }

  return (
    <S.ErrorContainer>
      <Heading size="4xl" fontWeight="700" transform="capitalize">
        Ops deu ruim...
      </Heading>

      <Button onClick={() => navigate('/')}>ir para home</Button>
    </S.ErrorContainer>
  );
};
