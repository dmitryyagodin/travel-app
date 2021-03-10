import React from 'react';
import { Context } from '../../context/MainContext';
import { HomeSlides } from '../HomeSlides';
import './Home.scss';

export const Home:React.FC = () => {
  const { user } = React.useContext(Context)
  return (
    <div className="container-xl">
      {/* <HomeSlides /> */}
      {user && <h1>Hello, {user.displayName}</h1>}
    </div>
  )
}
