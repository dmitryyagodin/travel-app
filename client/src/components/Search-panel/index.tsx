import React, { useState, useEffect } from 'react';
import './Search-panel.scss'
import { SearchPanelDataItem } from "../../interfaces/interfaces";
import { HeaderData } from '../../assets/translations/header-data';
import searchIcon from '../../assets/icons/search.svg'

export const SearchPanel: React.FC<SearchPanelDataItem> = (props) => {
  const langItem: string = props.langValue;
  const [searchItem, setSearchItem] = useState('');
  const [placeholderValue, setPlaceholderValue] = useState('Type to search');
  const [searcBtnValue, setSearcBtnValue] = useState('Search');

  const handleSubmitSearch = (e: { preventDefault: () => void; }) => {
    props.handleSearchFromParent(searchItem);
  }

  const handleSearchItem = (e: { target: { value: React.SetStateAction<string>; } }): void => {
    setSearchItem(e.target.value);
  }

  const handleResetInput = () => setSearchItem('');

  useEffect(() => {
    props.handleSearchFromParent(searchItem);
    switch(langItem) {
      case 'en':
        setPlaceholderValue(HeaderData.searchPlaceholder.en);
        setSearcBtnValue(HeaderData.searchButton.en);
        break;
      case 'ru':
        setPlaceholderValue(HeaderData.searchPlaceholder.ru);
        setSearcBtnValue(HeaderData.searchButton.ru);
        break;
      case 'es':
        setPlaceholderValue(HeaderData.searchPlaceholder.es);
        setSearcBtnValue(HeaderData.searchButton.es);
        break;
      default:
        setPlaceholderValue(HeaderData.searchPlaceholder.en);
        setSearcBtnValue(HeaderData.searchButton.en);
    }
  }, [langItem, props, searchItem]);

  return (
    <div className="input-group search-input">
      <div className="input-reset">
        <img src={searchIcon} alt="" />
        <input
          type="text"
          className="form-control"
          placeholder={placeholderValue}
          aria-label="Type to search"
          aria-describedby="button-addon2"
          value={searchItem}
          onChange={handleSearchItem}
        />
        <span className="close-icon" onClick={handleResetInput}>&#10006;</span>
      </div>
      {/* <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleSubmitSearch}
      >
        {searcBtnValue}
      </button>
        Search
      </button> */}
    </div>
  )
}
