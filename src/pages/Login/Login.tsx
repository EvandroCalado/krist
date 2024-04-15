import { Form, Link } from 'react-router-dom';

import { Button, Checkbox, Heading, Input } from 'components';

import * as S from './Login.styles';

export const Login = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src="/logo.png" alt="logo" />
      </S.Logo>
      <S.LoginImage>
        <img src="/auth/login-image.png" alt="login image" />
      </S.LoginImage>
      <S.LoginForm>
        <Form>
          <Heading as="h2" size="2xl" transform="capitalize">
            welcome
          </Heading>

          <p>please login here</p>

          <Input type="email" label="email address" name="email" />

          <Input type="password" label="password" name="password" />

          <span>
            <Checkbox label="remember me" name="remember" />
            <Link to="/forgot-password">forgot password?</Link>
          </span>

          <Button type="submit" width="100%">
            login
          </Button>
        </Form>
      </S.LoginForm>
    </S.Container>
  );
};
