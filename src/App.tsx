import {
  checkoutAction,
  loginAction,
  profileAction,
  registerAction,
} from 'actions';
import {
  checkoutLoader,
  homeLoader,
  productLoader,
  profileLoader,
  shopLoader,
} from 'loaders';
import {
  Cart,
  Checkout,
  Error,
  Home,
  Login,
  Product,
  Profile,
  Register,
  Shop,
} from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  CategoriesCarousel,
  FlashSale,
  Hero,
  ProductsList,
  RatingsCarousel,
  Services,
} from 'components';

import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    loader: homeLoader,
    children: [
      {
        index: true,
        element: [
          <Hero key={1} />,
          <CategoriesCarousel key={2} />,
          <ProductsList key={3} title="em destaque" />,
          <FlashSale key={4} />,
          <RatingsCarousel key={5} />,
          <Services key={6} />,
        ],
        errorElement: <Error />,
        loader: homeLoader,
      },
      {
        path: 'shop',
        element: <Shop />,
        errorElement: <Error />,
        loader: shopLoader,
      },
      {
        path: 'shop/product/:id',
        element: <Product />,
        errorElement: <Error />,
        loader: productLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <Error />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'profile',
        element: <Profile />,
        errorElement: <Error />,
        loader: profileLoader(store),
        action: profileAction(store),
      },
      {
        path: '*',
        element: <Error />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    loader: homeLoader,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    loader: homeLoader,
    action: registerAction,
  },
  {
    path: '*',
    element: <div>Not found</div>,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
