import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../../context/MainContext';
import { HomeSlides } from '../HomeSlides';
import './Home.scss';
import { Countries } from '../../assets/index';
import {
  CountryItem,
  HomeItem,
  ResultCountryItem
} from '../../interfaces/interfaces';

export const Home: React.FC<HomeItem> = (props) => {
  const { user } = React.useContext(Context)
  const [searchResults, setSearchResults] = useState<ResultCountryItem[]>([]);
  const searchItem: string = props.searchValue;
  const langItem: string = props.langValue;

  useEffect(() => {
    const resultsAfterTranslate: Array<ResultCountryItem> = Countries.map((country: CountryItem) => {
      switch(langItem) {
        case 'en':
          return {
            id: country.id,
            picture: country.picture,
            countryName: country.translateTo.en.countryName,
            capitalName: country.translateTo.en.capitalName
          }
        case 'ru':
          return {
            id: country.id,
            picture: country.picture,
            countryName: country.translateTo.ru.countryName,
            capitalName: country.translateTo.ru.capitalName
          }
        case 'es':
          return {
            id: country.id,
            picture: country.picture,
            countryName: country.translateTo.es.countryName,
            capitalName: country.translateTo.es.capitalName
          }
        default:
          return {
            id: country.id,
            picture: country.picture,
            countryName: country.translateTo.en.countryName,
            capitalName: country.translateTo.en.capitalName
          }
      }
    });

    if(searchItem !== '') {
      const resultsAfterSearch = resultsAfterTranslate.filter(country => {
        return country.countryName.toLowerCase().includes(searchItem.toLowerCase()) ||
        country.capitalName.toLowerCase().includes(searchItem.toLowerCase());
      });
      setSearchResults(resultsAfterSearch);
    }
    else {
      setSearchResults(resultsAfterTranslate);
    }
  }, [searchItem, langItem]);

  return (
    <div className="container-xl">
      {/* <HomeSlides /> */}
      {user && <h1>Hello, {user.displayName}</h1>}
      <div className='card-field'>
        {searchResults
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
                <Link
                  to={{
                    pathname: `/allcountries/:${element.id}`,
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
  )
}
