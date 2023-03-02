import React from 'react';
import NavBar from '../NavBar/NavBar';
import PageFooter from '../PageFooter/PageFooter';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col w-full h-full">
    <NavBar />
    <div className="flex flex-col flex-1 h-full p-4">
      {children}
    </div>
    <PageFooter />
  </div>
);

export default MainLayout;
