import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import { SearchPanel } from '../Search-panel/index';
import { SelectLang } from '../Select-lang/index';
import { Context } from '../../context/MainContext';
import { SignIn } from '../SignIn';
import { SignOut } from '../SignOut';
import { HeaderDataItem } from "../../interfaces/interfaces";
import SaveLangState from '../../utils/saveLangState';

export const Header: React.FC<HeaderDataItem> = (props) => {
  const { user, location } = React.useContext(Context);
  const isSearchHidden = location.pathname.split("/allcountries")[1] === "";
  const langItem: string = props.langValue;
  const [langValue, setLangValue] = SaveLangState('langValue', langItem);

  useEffect(() => {
    setLangValue(langItem);
  }, [langItem, setLangValue]);

  const handleSearch = (searchValue: string) => {
    props.handleSearchValue(searchValue);
  }

  const handleLang = (langValue: string) => {
    props.handleLangValue(langValue);
  }

  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <Link to="/allcountries" className="header__logo link">Travel App</Link>
        </div>
        {isSearchHidden ?
          <SearchPanel handleSearchFromParent={handleSearch} langValue={langValue}/> :
        null}
        <SelectLang handleLangFromParent={handleLang}/>
        <div className="header__sign">
          {user ? <SignOut langValue={langValue} /> : <SignIn langValue={langValue}/>}
        </div>
      </div>
    </header>
  )
}
