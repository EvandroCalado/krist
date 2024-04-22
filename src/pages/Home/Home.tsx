import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'components';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Krist | Home</title>
        <meta name="description" content="Loja online de roupas" />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
