import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import FloatingTab from '../components/kulakcik/Kulakcik';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FloatingTab page={location.pathname} />
      <Footer />
    </>
  );
};

export default MainLayout;
