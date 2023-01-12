import React, { useState } from "react";
import { AuthenticatedRoutesWrapper } from "@multiversx/sdk-dapp/wrappers";
import routes from "../../routes";
import LoginModalContext from "../../components/LoginModal/loginModalContext";

const Layout = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <AuthenticatedRoutesWrapper
      routes={routes}
    >
      <LoginModalContext.Provider value={{modalState, setModalState}}>
        {children}
      </LoginModalContext.Provider>
    </AuthenticatedRoutesWrapper>
  );
};

export default Layout;
