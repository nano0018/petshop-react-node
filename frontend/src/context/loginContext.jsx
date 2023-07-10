import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loginRole, setLoginRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ loginRole, setLoginRole, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
