import { Home, Login, Register } from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CategoriesCarousel, Hero } from 'components';

const categories = [
  {
    title: 'masculino',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'masculino',
  },
  {
    title: 'femenino',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'femenino',
  },
  {
    title: 'unisex',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'unisex',
  },
  {
    title: 'kids',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'kids',
  },
  {
    title: 'esportivo',
    image: '/products/camiseta/1.webp',
    buttonLabel: 'esportivo',
  },
];

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
          <CategoriesCarousel categories={categories} key={2} />,
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
