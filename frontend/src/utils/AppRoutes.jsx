import { GlobalContext } from "@context/GlobalContext";
import callLogin from "@hooks/useLogin";
import NotFound from "@pages/404";
import ChangePassword from "@pages/ChangePassword";
import CreateAccount from "@pages/CreateAccount";
import ForgotPassword from "@pages/ForgotPassword";
import Home from "@pages/Home";
import MyAccount from "@pages/MyAccount";
import MyOrders from "@pages/MyOrders";
import SignIn from "@pages/SignIn";
import { useContext, useEffect } from "react";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const context = useContext(GlobalContext);

  useEffect(() => {
    context.setLoginRole(callLogin());
  }, [context.isLoggedIn]);

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: !context.loginRole ? <Home /> : <MyOrders /> },
    { path: "/my-account", element: !context.loginRole ? <Home /> : <MyAccount /> },
    { path: "/login", element: <SignIn /> },
    { path: "/sign-up", element: <CreateAccount /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/recovery", element: <ChangePassword /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

export default AppRoutes;
