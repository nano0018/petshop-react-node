import NotFound from "@pages/404";
import CreateAccount from "@pages/CreateAccount";
import ForgotPassword from "@pages/ForgotPassword";
import Home from "@pages/Home";
import MyAccount from "@pages/MyAccount";
import MyOrders from "@pages/MyOrders";
import SignIn from "@pages/SignIn";
import Test from "@pages/Test";
import { useRoutes } from "react-router-dom";
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/login", element: <SignIn /> },
    { path: "/sign-up", element: <CreateAccount /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/test", element: <Test /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

export default AppRoutes;
