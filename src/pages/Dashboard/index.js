import React from 'react';
import MyCollection from './myCollection.js';
import Navbar from "../../components/Layout/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Layout/Footer";

const Dashboard = () => {
  
  return (
    <>
    <Navbar dashboardNav={true} />
    <Header />
    <MyCollection />
    <Footer />
    </>
  );
};

export default Dashboard;
