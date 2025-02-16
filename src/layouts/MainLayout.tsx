import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import ScrollRefresh from '../components/ScrollRefresh';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRefresh />
      <TopBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
