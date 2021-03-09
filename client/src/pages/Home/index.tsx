import React from 'react';
import { HomeSlides } from '../HomeSlides';
import './Home.scss';

export const Home:React.FC = () => {
  return (
    <div className="container-xl">
      <HomeSlides />
    </div>
  )
}
