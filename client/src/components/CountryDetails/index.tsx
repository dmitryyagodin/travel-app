import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CountryDetails.scss";
import { Countries } from '../../assets/index';
import {
  Params,
  CountryItem,
  DetailsItem,
  ResultCountryDetailItem
} from '../../interfaces/interfaces';
import { DetailsData } from '../../assets/translations/details-data';
import { ScrollToTopOnMount } from '../ScrollToTopOnMount';
import { CountryMap } from '../CountryMap/index';
import Banner from "../Banner";

export const CountryDetails: React.FC<DetailsItem> = (props) => {
  const history = useHistory();
  const [countryDetail, setCountryDetail] = useState({} as ResultCountryDetailItem);
  const [btnValue, setBtnValue] = useState('Back to main page');
  const [capitalValue, setCapitalValue] = useState('Capital');
  const langItem: string = props.langValue;
  const [sliderImages, setSliderImges] = React.useState([])
  let { id } = useParams() as Params;
  id = id.replace(":", "");
  console.log(countryDetail);

  const handleBackClick = () => {
    history.push("/allcountries");
  }
  console.log(sliderImages);

  useEffect(() => {
    const resultsAfterSwitch: CountryItem = Countries
      .find(item => item.id.toString() === id) || {} as CountryItem;
    resultsAfterSwitch.translateTo.en.sights.map((el: any) => setSliderImges((prev) => [...prev, el.picture]))

    switch (langItem) {
      case 'en':
        setCountryDetail({
          picture: resultsAfterSwitch.picture,
          countryName: resultsAfterSwitch.translateTo.en.countryName,
          capitalName: resultsAfterSwitch.translateTo.en.capitalName
        });
        setBtnValue(DetailsData.backButton.en);
        setCapitalValue(DetailsData.capitalVal.en);
        break;
      case 'ru':
        setCountryDetail({
          picture: resultsAfterSwitch.picture,
          countryName: resultsAfterSwitch.translateTo.ru.countryName,
          capitalName: resultsAfterSwitch.translateTo.ru.capitalName
        });
        setBtnValue(DetailsData.backButton.ru);
        setCapitalValue(DetailsData.capitalVal.ru);
        break;
      case 'es':
        setCountryDetail({
          picture: resultsAfterSwitch.picture,
          countryName: resultsAfterSwitch.translateTo.es.countryName,
          capitalName: resultsAfterSwitch.translateTo.es.capitalName
        });
        setBtnValue(DetailsData.backButton.es);
        setCapitalValue(DetailsData.capitalVal.es);
        break;
      default:
        setCountryDetail({
          picture: resultsAfterSwitch.picture,
          countryName: resultsAfterSwitch.translateTo.en.countryName,
          capitalName: resultsAfterSwitch.translateTo.en.capitalName
        });
        setBtnValue(DetailsData.backButton.en);
        setCapitalValue(DetailsData.capitalVal.en);
    }

  }, [id, langItem]);

  return (
    <div>
      <ScrollToTopOnMount />
      <Banner images={sliderImages} />
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleBackClick}
      >
        {btnValue}
      </button>
      <div className="card-body">
        <h5 className="card-title">{countryDetail.countryName}</h5>
        <p className="card-text">{capitalValue}: {countryDetail.capitalName}</p>
      </div>
      <CountryMap countryId={id} language={langItem} />
    </div>
  )
}
