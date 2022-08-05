/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const NavbarItems = () => {
  return ( <> 
    <ul className="navbar-nav ms-auto">      
      <li className="nav-item mx-2 d-flex align-items-center">
        <a href="https://discord.gg/v6eJyQWbaS" target="_blank" className="text-secondary text-uppercase text-lg mb-2 mb-lg-0">
          <i className="fab fa-discord" aria-hidden="true"></i>
        </a>
      </li>
      <li className="nav-item mx-2 d-flex align-items-center">
        <a href="https://twitter.com/NFTimofficial" target="_blank" className="text-secondary text-uppercase text-lg mb-2 mb-lg-0">
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li className="nav-item mx-2 pe-2 d-flex align-items-center">
        <a className="text-secondary text-uppercase text-lg mb-2 mb-lg-0" target="_blank" href="https://github.com/web3-creative-tim">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
    </>
  );
};

export default NavbarItems;
