import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loginRole, setLoginRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartProductCount, setCartProductCount] = useState(0);
  const [productDetailData, setProductDetailData] = useState({});
  const [productCartData, setProductCartData] = useState([]);
  const [isProductDetailOpened, setIsProductDetailOpened] = useState(false);
  const [isProductCartOpened, setIsProductCartOpened] = useState(false);
  const [isChangePasswordModalOpened, setIsChangePasswordModalOpened] =
    useState(false);

  return (
    <GlobalContext.Provider
      value={{
        loginRole,
        setLoginRole,
        isLoggedIn,
        setIsLoggedIn,
        cartProductCount,
        setCartProductCount,
        isProductDetailOpened,
        setIsProductDetailOpened,
        productDetailData,
        setProductDetailData,
        isProductCartOpened,
        setIsProductCartOpened,
        productCartData,
        setProductCartData,
        isChangePasswordModalOpened,
        setIsChangePasswordModalOpened,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
