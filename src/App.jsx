import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Cart from './features/cart/Cart';
import Home from './ui/Home';
import Login from './features/user/Login';

import Menu, { loader as menuLoader } from './features/menu/Menu';
import Order, { loader as orderLoader } from './features/order/Order';

import Registration from './features/user/Registration';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Instruction from './ui/Instruction';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Registration /> },
      { path: '/verify', element: <Instruction /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:id',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
