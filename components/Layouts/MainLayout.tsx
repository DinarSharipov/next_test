import React from 'react';
import NavBar from '../NavBar/NavBar';
import PageFooter from '../PageFooter/PageFooter';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col w-full h-full">
    <NavBar />
    {children}
    <PageFooter />
  </div>
);

export default MainLayout;
