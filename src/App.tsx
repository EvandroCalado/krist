import { loginAction, registerAction } from 'actions';
import { homeLoader } from 'loaders';
import { Home, Login, Register, Shop } from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  CategoriesCarousel,
  FlashSale,
  Hero,
  ProductsList,
  RatingsCarousel,
  Services,
} from 'components';
import { ratings } from 'components/RatingsCarousel/RatingsCarousel.stories';

import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Home error</div>,
    loader: homeLoader,
    children: [
      {
        index: true,
        element: [
          <Hero key={1} />,
          <CategoriesCarousel key={2} />,
          <ProductsList key={3} />,
          <FlashSale key={4} />,
          <RatingsCarousel key={5} ratings={ratings} />,
          <Services key={6} />,
        ],
        errorElement: <div>Home error</div>,
        loader: homeLoader,
      },
      {
        path: 'shop',
        element: <Shop />,
        errorElement: <div>Shop error</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>Login error</div>,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <div>Register error</div>,
    action: registerAction,
  },
  {
    path: '*',
    element: <div>Not found</div>,
    errorElement: <div>Not found error</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
