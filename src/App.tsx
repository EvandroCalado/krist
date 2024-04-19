import { Home, Login, Register } from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  CategoriesCarousel,
  Hero,
  ProductsList,
  RatingsCarousel,
} from 'components';
import { categories } from 'components/CategoriesCarousel/CategoriesCarousel.stories';
import { products } from 'components/ProductsList/ProductsList.stories';
import { ratings } from 'components/RatingsCarousel/RatingsCarousel.stories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Home error</div>,
    children: [
      {
        index: true,
        element: [
          <Hero key={1} />,
          <CategoriesCarousel key={2} categories={categories} />,
          <ProductsList key={3} products={products} />,
          <RatingsCarousel key={4} ratings={ratings} />,
        ],
        errorElement: <div>Home error</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>Login error</div>,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <div>Register error</div>,
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
