import { Home, Login, Register } from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Error</div>,
    children: [],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>Login</div>,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <div>Register</div>,
  },
  {
    path: '*',
    element: <div>Not found</div>,
    errorElement: <div>Not found</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
