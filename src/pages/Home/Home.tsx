import { Helmet } from 'react-helmet-async';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

import { Footer, Header, MainLoading } from 'components';

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

      <main
        style={{
          minHeight: '50.5vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ScrollRestoration />
        {isPageLoading ? <MainLoading /> : <Outlet />}
      </main>

      <Footer />
    </>
  );
};
