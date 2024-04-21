import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'components';

export const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
