import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const MainLayout: React.FC = ({ children }) => {
  console.log(children);

  return (
    <>
      <Header handleSearchValue={''}/>
      <div className="body">
        {children}
      </div>
      <Footer />
    </>
  )
}
