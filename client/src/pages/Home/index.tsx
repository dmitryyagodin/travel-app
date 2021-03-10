import React from 'react';
import {Link} from 'react-router-dom';
import { HomeSlides } from '../HomeSlides';
import './Home.scss';
import { Countries } from '../../dummy-data/index';

export const Home: React.FC = () => {

  return (
    <div className="container-xl">
      {/* <HomeSlides /> */}
      <div className='card-field'>
        {Countries
        .map((element, index) => {
          return (
            <div
              className="card"
              key={index}
            >
              <img src={element.picture} className="card-img-top" alt={element.countryName} />
              <div className="card-body">
                <h5 className="card-title">{element.countryName}</h5>
                <p className="card-text">Capital: {element.capitalName}</p>
                <Link to="/allcountries" className="header-link">See details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
