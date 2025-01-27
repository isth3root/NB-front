// ========== PACKAGES ========== \\
import React from 'react';
import { Outlet } from 'react-router-dom';

// ========== COMPONENTS ========== \\
import Header from './layouts/Header';
import Footer from './layouts/Footer';


const Layout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen light'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
