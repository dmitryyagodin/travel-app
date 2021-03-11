import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CountryDetails.scss";
import {Params} from "../../interfaces/interfaces";
import { Countries } from '../../dummy-data/index';
import { CountryItem } from '../../interfaces/interfaces';

export const CountryDetails: React.FC = (props) => {
  const history = useHistory();
  let { country } = useParams() as Params;
  country = country.replace(":", "");

  const handleBackClick = () => {
    history.push("/allcountries");
  }

  const countryDetails: CountryItem = Countries.find(item => item.countryName === country) || {} as CountryItem;
  const {countryName, capitalName} = countryDetails;

  return (
    <div>
      <button onClick={handleBackClick}>
        Back to main page
      </button>
      <div className="card-body">
        <h5 className="card-title">{countryName}</h5>
        <p className="card-text">Capital: {capitalName}</p>
      </div>
    </div>
  )
}
