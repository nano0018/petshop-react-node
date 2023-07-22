import { GlobalContext } from "@context/GlobalContext";
import NotFound from "@pages/404";
import ChangePassword from "@pages/ChangePassword";
import CreateAccount from "@pages/CreateAccount";
import ForgotPassword from "@pages/ForgotPassword";
import Home from "@pages/Home";
import MyAccount from "@pages/MyAccount";
import MyOrders from "@pages/MyOrders";
import SignIn from "@pages/SignIn";
import { useContext, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { fetchData } from "./requestHandler";
import { callLogin, callUserData } from "@hooks/useLogin";
import AdminPanel from "@components/AdminPanel";
import { ROLES } from "./auth/permissionsRoles";
import Test from "@pages/Test";
import ManageUsers from "@pages/Admin/ManageUsers";
import ManageProducts from "@pages/Admin/ManageProducts";
import ManageCategories from "@pages/Admin/ManageCategories";
import ManageCustomers from "@pages/Admin/ManageCustomers";
import ManageOrders from "@pages/Admin/ManageOrders";

const AppRoutes = () => {
  const context = useContext(GlobalContext);
  const [isValidToken, setIsVaLidToken] = useState(false);

  useEffect(() => {
    const URL = "auth/validate";

    const validateToken = async () => {
      try {
        const response = await fetchData(URL);
        if (response == "Authorized") {
          setIsVaLidToken(true);
        } else {
          setIsVaLidToken(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (!localStorage.getItem("token")) {
      setIsVaLidToken(false);
    } else {
      validateToken().catch(console.error);
    }
  }, []);

  useEffect(() => {
    if (isValidToken) {
      context.setLoginRole(callLogin());
      context.setIsLoggedIn(true);
      context.setUserId(callUserData().id);
    }
  }, [isValidToken]);

  useEffect(() => {
    context.setLoginRole(callLogin());
  }, [context.isLoggedIn]);

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/my-orders",
      element: !context.loginRole ? <Home /> : <MyOrders />,
    },
    {
      path: "/my-account",
      element: !context.loginRole ? <Home /> : <MyAccount />,
    },
    {
      path: "/admin",
      children: ROLES.employees.includes(context.loginRole)
        ? [
            {
              index: true,
              element: <AdminPanel />,
            },
            { path: "users", element: <ManageUsers /> },
            { path: "users/:id", element: <Test /> },
            { path: "customers", element: <ManageCustomers /> },
            { path: "customers/:id", element: <Test /> },
            { path: "products", element: <ManageProducts /> },
            { path: "products/:id", element: <ManageProducts /> },
            { path: "categories", element: <ManageCategories /> },
            { path: "categories/:id", element: <ManageCategories /> },
            { path: "orders", element: <ManageOrders /> },
            { path: "orders/:id", element: <ManageOrders /> },
          ]
        : [{ index: "true", element: <NotFound /> }],
    },
    { path: "/login", element: <SignIn /> },
    { path: "/sign-up", element: <CreateAccount /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/recovery", element: <ChangePassword /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

export default AppRoutes;
