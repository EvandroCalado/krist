import { Login } from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
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
    element: <div>register</div>,
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
