import React from 'react';
import NavbarConnect from './navbarConnect.js';
import NavbarSimple from './navbarSimple.js';

const Navbar = ({openModal ,...props}) => {
  const isNavbarConnect = props.isNavbarConnect;
  const dashboardNav = props.dashboardNav;
  
  if (isNavbarConnect) {
    return <NavbarConnect isNavbarConnect={isNavbarConnect} openModal={openModal}/>;
  }
  return <NavbarSimple dashboardNav={dashboardNav} />;
};

export default Navbar;
