import NotFound from "@pages/404";
import Home from "@pages/Home";
import MyAccount from "@pages/MyAccount";
import MyOrders from "@pages/MyOrders";
import SignIn from "@pages/SignIn";
import { useRoutes } from "react-router-dom";
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/login", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

export default AppRoutes;
