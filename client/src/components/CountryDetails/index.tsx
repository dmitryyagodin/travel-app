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
import { Widgets } from "../Widgets";

export const CountryDetails: React.FC<DetailsItem> = (props) => {
  const history = useHistory();
  const [countryDetail, setCountryDetail] = useState({} as ResultCountryDetailItem);
  const [btnValue, setBtnValue] = useState('Back to main page');
  const [capitalValue, setCapitalValue] = useState('Capital');
  const [descrValue, setDescrValue] = useState('Description');
  const langItem: string = props.langValue;
  const [sliderDataItem, setSliderData] = useState([] as any);
  const [video, setVideo] = useState('' as any)
  let { id } = useParams() as Params;
  id = id.replace(":", "");

  const handleBackClick = () => {
    history.push("/allcountries");
  }

  useEffect(() => {
    const resultsAfterSwitch: CountryItem = Countries
      .find(item => item.id.toString() === id) || {} as CountryItem;
    const sliderData = resultsAfterSwitch.translateTo.en.sights.map((el, index) => {
      const ruData = resultsAfterSwitch.translateTo.ru.sights
        .filter(el => el.id.toString() === (index+1).toString());
      const esData = resultsAfterSwitch.translateTo.es.sights
        .filter(el => el.id.toString() === (index+1).toString());
      return {
        id: el.id,
        picture: el.picture,
        sightName: {
          en: el.sightName,
          ru: ruData[0]?.sightName,
          es: esData[0]?.sightName
        },
        description: {
          en: el.description,
          ru: ruData[0]?.description,
          es: esData[0]?.description
        }
      }
    });
    setSliderData(sliderData);
    setVideo(resultsAfterSwitch.video);
  }, [id])

  useEffect(() => {
    const resultsAfterSwitch: CountryItem = Countries
      .find(item => item.id.toString() === id) || {} as CountryItem;

    switch (langItem) {
      case 'en':
        setCountryDetail({
          picture: resultsAfterSwitch.picture,
          countryName: resultsAfterSwitch.translateTo.en.countryName,
          capitalName: resultsAfterSwitch.translateTo.en.capitalName,
          description: resultsAfterSwitch.translateTo.en.description
        });
        setBtnValue(DetailsData.backButton.en);
        setCapitalValue(DetailsData.capitalVal.en);
        setDescrValue(DetailsData.descrValue.en);
        break;
      case 'ru':
        setCountryDetail({
          picture: resultsAfterSwitch.picture,
          countryName: resultsAfterSwitch.translateTo.ru.countryName,
          capitalName: resultsAfterSwitch.translateTo.ru.capitalName,
          description: resultsAfterSwitch.translateTo.ru.description
        });
        setBtnValue(DetailsData.backButton.ru);
        setCapitalValue(DetailsData.capitalVal.ru);
        setDescrValue(DetailsData.descrValue.ru);
        break;
      case 'es':
        setCountryDetail({
          picture: resultsAfterSwitch.picture,
          countryName: resultsAfterSwitch.translateTo.es.countryName,
          capitalName: resultsAfterSwitch.translateTo.es.capitalName,
          description: resultsAfterSwitch.translateTo.es.description
        });
        setBtnValue(DetailsData.backButton.es);
        setCapitalValue(DetailsData.capitalVal.es);
        setDescrValue(DetailsData.descrValue.es);
        break;
      default:
        setCountryDetail({
          picture: resultsAfterSwitch.picture,
          countryName: resultsAfterSwitch.translateTo.en.countryName,
          capitalName: resultsAfterSwitch.translateTo.en.capitalName,
          description: resultsAfterSwitch.translateTo.en.description
        });
        setBtnValue(DetailsData.backButton.en);
        setCapitalValue(DetailsData.capitalVal.en);
        setDescrValue(DetailsData.descrValue.en);
    }

  }, [id, langItem]);

  return (
    <>
      <ScrollToTopOnMount />
      <div className="container country-details">
        <div className="row">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleBackClick}
          >
            {btnValue}
          </button>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="row">
              <div className="card">
                <img src={countryDetail.picture} className="card-img-top" alt={countryDetail.countryName} />
                <div className="card-body">
                  <h5 className="card-title">{countryDetail.countryName}</h5>
                  <p className="card-text">{capitalValue}: {countryDetail.capitalName}</p>
                  <p className="card-text">{descrValue}: {countryDetail.description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <iframe title="Video" width="560" height="315" src={video.replace(/watch\?v\=/, 'embed/')} allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-xs">
            <Widgets city={countryDetail.capitalName} lang={langItem}/>
          </div>
        </div>
      </div>
      <Banner sliderdata={sliderDataItem} selectedLang={langItem} />
      <CountryMap countryId={id} language={langItem} />
    </>
  )
}
