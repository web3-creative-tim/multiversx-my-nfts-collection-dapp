import React, { useContext, useEffect, useState } from "react";
import brandLogo from "../../../assets/img/logo.svg";
import "../../../assets/custom.scss";
import NavbarItems from "./navbarItems";
import LoginModalContext from "../../LoginModal/loginModalContext";

const NavbarConnect = (props) => {
  const { setModalState } = useContext(LoginModalContext);
  const [shadow, setShadow] = useState("shadow-none");

  useEffect(() => {
    document.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
        setShadow([]);
      } else {
        setShadow("shadow-none");
      }
    });

    return () => setShadow("shadow-none");
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  navbar-dark z-index-3 sticky-top bg-white py-3 pt-4 start-0 end-0 px-4 ${shadow}`}
      >
        <div className="container px-0">
          <a
            className="navbar-brand font-weight-bolder ms-sm-3"
            href="https://www.creative-tim.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="110"
              alt="logo"
              src={brandLogo}
            />
          </a>

          <button
            className="navbar-toggler shadow-none ms-md-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div
            className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
            id="navigation"
          >
            <NavbarItems />
            {props.isNavbarConnect && (
              <button
                type="button"
                className="btn btn-sm btn-dark mb-0 me-1"
                onClick={() => setModalState(true)}
              >
                Connect
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarConnect;
