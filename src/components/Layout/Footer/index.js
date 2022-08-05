/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer pt-7 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-4 mx-auto text-center">
            <a href="javascript:;"  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Company
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              About Us
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Team
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Products
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Blog
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Pricing
            </a>
          </div>
          <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
            <a href="javascript:;"  className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-dribbble" />
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-twitter" />
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-instagram" />
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-pinterest" />
            </a>
            <a href="javascript:;"  className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-github" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto text-center mt-1">
            <p className="mb-0 text-secondary">
              © {new Date().getFullYear()} <a href="https://www.creative-tim.com/" className="text-decoration-underline text-dark" target="_blank">Creative Tim</a>, all rights reserved. Made with <i className="fas fa-heart"></i> for a better web.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
