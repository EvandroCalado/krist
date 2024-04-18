import { Outlet } from 'react-router-dom';

import { Header } from 'components';

export const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
