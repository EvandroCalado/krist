import { Form, Link } from 'react-router-dom';

import { Button, Heading, Input, Logo } from 'components';

import * as S from './Login.styles';

export const Login = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.LoginImage>
        <img src="/auth/login-image.png" alt="login image" />
      </S.LoginImage>
      <S.LoginForm>
        <Form>
          <Heading as="h2" size="xl" transform="capitalize">
            bem vindo
          </Heading>

          <p>acessar conta</p>

          <Input type="email" label="email" name="email" />

          <Input type="password" label="senha" name="password" />

          <span>
            Não tem conta?
            <Link to="/register">Registrar</Link>
          </span>

          <Button type="submit" width="100%">
            entrar
          </Button>
        </Form>
      </S.LoginForm>
    </S.Container>
  );
};
