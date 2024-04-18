import { Home, Login, Register } from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CategoriesCarousel, Hero, ProductsList } from 'components';

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

const products = [
  {
    id: 1,
    cover: '/products/camiseta/1.webp',
    title: 'camiseta',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 2,
    cover: '/products/blusa/1.webp',
    title: 'blusa',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 3,
    cover: '/products/cropped/1.webp',
    title: 'cropped',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 4,
    cover: '/products/regata/1.webp',
    title: 'regata',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 5,
    cover: '/products/top/1.webp',
    title: 'top',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 6,
    cover: '/products/vestido/1.webp',
    title: 'vestido',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 7,
    cover: '/products/camiseta/1.webp',
    title: 'camiseta',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 8,
    cover: '/products/camiseta/1.webp',
    title: 'camiseta',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 9,
    cover: '/products/top/1.webp',
    title: 'camiseta',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
  },
  {
    id: 10,
    cover: '/products/cropped/1.webp',
    title: 'cropped',
    resume: 'camiseta cinza manga curta',
    price: 59.99,
    discount: 15,
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
          <ProductsList key={3} products={products} />,
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
