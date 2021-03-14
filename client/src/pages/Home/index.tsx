import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../../context/MainContext';
import { HomeSlides } from '../HomeSlides';
import './Home.scss';
import { Countries } from '../../dummy-data/index';
import { CountryItem, CountryItemFirebase } from '../../interfaces/interfaces';
import { HomeItem } from '../../interfaces/interfaces';

export const Home: React.FC<HomeItem> = (props) => {
  const { user, countries } = React.useContext(Context)
  const [searchResults, setSearchResults] = useState<CountryItem[]>([]);
  const searchItem: string = props.searchValue;

  useEffect(() => {
    if (searchItem !== '') {
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
    <>
      <HomeSlides />
      <div className="container-xl">
        {user && <h1>Hello, {user.displayName}</h1>}
        <div className='card-field'>
          {countries.map((el: CountryItemFirebase, index: any) => (
            <div
              className="card"
              key={index}
            >
              <img src={el.img_title} alt="" />
              <div className="card-body">
                <h5 className="card-title">{el.name_ru}</h5>
                <p className="card-text">Capital: {el.capital_ru}</p>
                <Link
                  to={{
                    pathname: `/allcountries/:${el.name_en}`,
                  }}
                  className="header-link"
                >
                  See details
                    </Link>
              </div>
            </div>
          ))}
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
                    <Link
                      to={{
                        pathname: `/allcountries/:${element.countryName}`,
                      }}
                      className="header-link"
                    >
                      See details
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  )
}
