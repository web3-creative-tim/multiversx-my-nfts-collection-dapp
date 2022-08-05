/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from "react";
import bg from "../../assets/img/bg-header.jpg";
import bgDash from "../../assets/img/bg-header-dashboard.jpg";
import elrondLogo from "../../assets/img/logo-elrond.png";
import LoginModalContext from "../LoginModal/loginModalContext";

export const Header = (props) => {
  const headerPresentation = props.headerPresentation;
  const { setModalState } = useContext(LoginModalContext);

  const moveTo = (el) => {
    if (document.getElementById(el) !== null) {
      document.getElementById(el).scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  if (headerPresentation) {
    return (
      <header>
        <div className='page-header overflow-visible mx-4 mb-0 mt-2 border-radius-xl align-items-center min-vh-70' style={{backgroundImage: `url(${bg})`}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 mx-auto d-flex justify-content-center flex-column text-center">
                <h5 className="text-white">Your Web 3.0 Journey Starts Now</h5>
                <h1 className="mb-4 font-weight-black text-white">My NFTs Collection Dapp</h1>
                <p className="text-lg text-white">
                  Access all your NFTs and check out their attributes and rarities based on <br></br>
                  <img className="mt-4" src={elrondLogo} width={150} alt="" />
                </p>
                <button onClick={() => setModalState(true)} className="btn btn-dark btn-lg mb-0 mt-5 mx-auto px-5">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } 

  return (
    <header>
      <div className='page-header overflow-visible align-items-center min-vh-50' style={{backgroundImage: `url(${bgDash})`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 mx-auto d-flex justify-content-center flex-column text-center">
              <h5>Your Web 3.0 Journey Starts Now</h5>
              <h1 className="mb-4 font-weight-black">My NFTs Collection</h1>
              <p className="text-lg">
                Here you can access your NFTs and check out their attributes and rarities! <br></br>
              </p>
              <div>
                <button className="btn btn-dark mb-0 mt-4 " onClick={() => moveTo('myNFTs')}>View My NFTs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
