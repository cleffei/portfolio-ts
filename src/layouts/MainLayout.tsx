import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import ScrollRefresh from '../components/ScrollRefresh';

const MainLayout: React.FC = () => {
  return (
    <>
      <ScrollRefresh />
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
