import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import LoginModal from "../components/LoginModal";

const Presentation = () => {
  return ( <>
    <LoginModal />
    <Navbar isNavbarConnect />
    <Header headerPresentation />
    <Footer />
    </>
  );
};

export default Presentation;
