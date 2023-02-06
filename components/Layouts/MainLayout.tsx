import React from 'react';
import NavBar from '../NavBar/NavBar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default MainLayout;
