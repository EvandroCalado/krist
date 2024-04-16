import { Form, Link } from 'react-router-dom';

import { Button, Heading, Input, Logo } from 'components';

import * as S from './Register.styles';

export const Register = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.RegisterImage>
        <img src="/auth/register-image.png" alt="login image" />
      </S.RegisterImage>
      <S.RegisterForm>
        <Form>
          <Heading as="h2" size="xl" transform="capitalize">
            criar conta
          </Heading>

          <p>entre com os detalhes</p>

          <Input type="text" label="usuário" name="identifier" />

          <Input type="email" label="email" name="email" />

          <Input type="password" label="senha" name="password" />

          <span>
            Já tem conta?
            <Link to="/login">Entrar</Link>
          </span>

          <Button type="submit" width="100%">
            cadastrar
          </Button>
        </Form>
      </S.RegisterForm>
    </S.Container>
  );
};
