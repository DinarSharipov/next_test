import React from 'react';
import NavBar from '../NavBar/NavBar';
import PageFooter from '../PageFooter/PageFooter';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <NavBar />
    {children}
    <PageFooter />
  </>
);

export default MainLayout;
