import { checkoutAction, loginAction, registerAction } from 'actions';
import { checkoutLoader, homeLoader, productLoader, shopLoader } from 'loaders';
import {
  Cart,
  Checkout,
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
          <ProductsList key={3} title="em destaque" />,
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
        loader: shopLoader,
      },
      {
        path: 'shop/product/:id',
        element: <Product />,
        errorElement: <div>Products error</div>,
        loader: productLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <div>Cart error</div>,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <div>checkout error</div>,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'profile',
        element: <Profile />,
        errorElement: <div>profile error</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>Login error</div>,
    loader: homeLoader,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <div>Register error</div>,
    loader: homeLoader,
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
