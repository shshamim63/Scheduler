import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Home from "./ui/Home";
import Login from "./features/user/Login";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import OrderItem from "./features/order/OrderItem";
import Registration from "./features/user/Registration";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Registration /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:id", element: <OrderItem /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
