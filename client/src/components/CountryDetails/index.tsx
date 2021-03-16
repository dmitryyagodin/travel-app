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
import { makeStyles } from "@material-ui/core";
import { CountryRating } from "../CountryRating";
import { Context } from "../../context/MainContext";

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
})

export const CountryDetails: React.FC<DetailsItem> = (props) => {
  const { userMark, setUserMark } = React.useContext(Context)
  const classes = useStyles()
  const history = useHistory();
  const [countryDetail, setCountryDetail] = useState({} as ResultCountryDetailItem);
  const [btnValue, setBtnValue] = useState('Back to main page');
  const [capitalValue, setCapitalValue] = useState('Capital');
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

  console.log(countryDetail);

  return (
    <>
      <ScrollToTopOnMount />
      <div className="container country-details">
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
        <iframe title="Video" width="560" height="315" src={video.replace(/watch\?v\=/, 'embed/')} allowFullScreen></iframe>
        <Widgets city={countryDetail.capitalName} lang={langItem}/>
      </div>
      <Banner sliderdata={sliderDataItem} selectedLang={langItem} />
      <CountryMap countryId={id} language={langItem} />
    </>
  )
}
