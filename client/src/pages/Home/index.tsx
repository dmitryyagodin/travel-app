import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { HomeSlides } from '../HomeSlides';
import './Home.scss';
import { Countries } from '../../dummy-data/index';
import { CountryItem } from '../../interfaces/interfaces';

export const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState<CountryItem[]>([]);
  const searchItem: string = '';

  useEffect(() => {
    if(searchItem !== '') {
      const results = Countries.filter((country: CountryItem) =>
        country.countryName.toLowerCase().includes(searchItem.toLowerCase())
      );
      setSearchResults(results);
    }
    else {
      setSearchResults(Countries);
    }
    }, [searchItem]);

  return (
    <div className="container-xl">
      {/* <HomeSlides /> */}
      <div className='card-field'>
        {searchResults
        .map((element: CountryItem, index) => {
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
