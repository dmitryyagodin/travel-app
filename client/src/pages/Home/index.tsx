import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../../context/MainContext';
import { HomeSlides } from '../HomeSlides';
import './Home.scss';
import { Countries } from '../../assets/index';
import {
  CountryItem,
  HomeItem,
  ResultCountryItem,
  CountryItemFirebase
} from '../../interfaces/interfaces';
import { HomeData } from '../../assets/translations/home-data';

export const Home: React.FC<HomeItem> = (props) => {
  const { user, countries } = React.useContext(Context)
  const [searchResults, setSearchResults] = useState<ResultCountryItem[]>([]);
  const [linkValue, setLinkValue] = useState('See details');
  const [capitalValue, setCapitalValue] = useState('Capital');
  const searchItem: string = props.searchValue;
  const langItem: string = props.langValue;

  useEffect(() => {
    const resultsAfterTranslate: Array<ResultCountryItem> = Countries.map((country: CountryItem) => {
      switch(langItem) {
        case 'en':
          setLinkValue(HomeData.linkValue.en);
          setCapitalValue(HomeData.capitalValue.en);
          return {
            id: country.id,
            picture: country.picture,
            countryName: country.translateTo.en.countryName,
            capitalName: country.translateTo.en.capitalName
          }
        case 'ru':
          setLinkValue(HomeData.linkValue.ru);
          setCapitalValue(HomeData.capitalValue.ru);
          return {
            id: country.id,
            picture: country.picture,
            countryName: country.translateTo.ru.countryName,
            capitalName: country.translateTo.ru.capitalName
          }
        case 'es':
          setLinkValue(HomeData.linkValue.es);
          setCapitalValue(HomeData.capitalValue.es);
          return {
            id: country.id,
            picture: country.picture,
            countryName: country.translateTo.es.countryName,
            capitalName: country.translateTo.es.capitalName
          }
        default:
          setLinkValue(HomeData.linkValue.en);
          setCapitalValue(HomeData.capitalValue.en);
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
            .map((element, index) => {
              return (
                <div
                  className="card"
                  key={index}
                >
                  <img src={element.picture} className="card-img-top" alt={element.countryName} />
                  <div className="card-body">
                    <h5 className="card-title">{element.countryName}</h5>
                    <p className="card-text">{capitalValue}: {element.capitalName}</p>
                    <Link
                      to={{
                        pathname: `/allcountries/:${element.id}`,
                      }}
                      className="header-link"
                    >
                      {linkValue}
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
