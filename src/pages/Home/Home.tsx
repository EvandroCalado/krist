import { Helmet } from 'react-helmet-async';
import { Outlet, useNavigation } from 'react-router-dom';

import { Footer, Header } from 'components';

export const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Helmet>
        <title>Krist | Home</title>
        <meta name="description" content="Loja online de roupas" />
      </Helmet>
      <Header />
      {isPageLoading ? <h1>Carregando...</h1> : <Outlet />}
      <Footer />
    </>
  );
};
