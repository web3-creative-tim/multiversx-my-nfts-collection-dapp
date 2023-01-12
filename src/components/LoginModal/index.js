import React, { useEffect, useState, useContext } from "react";
import * as DappUI from "@multiversx/sdk-dapp/UI";
import { useGetLoginInfo } from '@multiversx/sdk-dapp/hooks/account';
import { routeNames } from "../../routes";
import LoginModalContext from "./loginModalContext";

const LoginButton = () => {
  const { modalState, setModalState } = useContext(LoginModalContext);
  const [show, setShow] = useState(false);

  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  const { isLoggedIn } = useGetLoginInfo();

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = '/multiversx-my-nfts-collection-dapp' + routeNames.dashboard;
    }
  }, [isLoggedIn])

  const handleClose = () => {
    setTimeout(() => {
      setShow(false);
    }, 100);
  };

  const handleShow = () => {
    setShow(true);

    setTimeout(() => {
      document.querySelector(".backdrop").classList.remove("opacity-0");
      document.querySelector(".backdrop").classList.add("opacity-10");
    }, 100);
  };

  useEffect(() => {
    if (modalState) {
      handleShow();
      setModalState(false);
    }
  }, [modalState, setModalState])

  return (
    <>
      <div
        className={`d-flex position-fixed w-100 h-100 align-items-center backdrop opacity-0 ${
          !show ? "d-none" : ""
        }`}
        onClick={handleClose}
      >
        <div className={`card z-index-1 card-login card-body px-4 mx-auto`}>
          <div className="card-header text-center">
            <h4 className="mb-3">Login</h4>
            <p className="mb-0">Pick a Login Method</p>
            <button
              type="button"
              className="btn btn-white border-0 text-dark shadow-none my-1 top-0 position-absolute bg-transparent"
              aria-label="Close"
              style={{ right: "0" }}
              onClick={handleClose}
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>

          <ExtensionLoginButton
            callbackRoute={routeNames.dashboard}
            loginButtonText={"Maiar Extension"}
            className={"defi btn-outline-dark border-dark btn_login"}
          />
          <WebWalletLoginButton
            callbackRoute={routeNames.dashboard}
            loginButtonText={"MultiversX Web wallet"}
            className={"web btn-outline-dark text-dark border-dark btn_login"}
          />
          <LedgerLoginButton
            loginButtonText={"Ledger"}
            callbackRoute={routeNames.dashboard}
            className={"ledger text-dark shadow-none btn_login"}
          />
          <WalletConnectLoginButton
            callbackRoute={routeNames.dashboard}
            loginButtonText={"Maiar"}
            className={"maiar text-dark shadow-none btn_login"}
          />
        </div>
      </div>
    </>
  );
};

export default LoginButton;
