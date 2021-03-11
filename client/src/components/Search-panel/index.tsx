import React, {useState, useEffect} from 'react';
import './Search-panel.scss'
import {SearchPanelDataItem} from "../../interfaces/interfaces";

export const SearchPanel: React.FC<SearchPanelDataItem> = (props) => {
  const [searchItem, setSearchItem] = useState('');

  const handleSubmitSearch = (e: { preventDefault: () => void; }) => {
    props.handleSearchFromParent(searchItem);
  }

  const handleSearchItem = (e: {target: { value: React.SetStateAction<string>; }}): void => {
    setSearchItem(e.target.value);
  }

  const handleResetInput = () => setSearchItem('');

  useEffect(() => {
    props.handleSearchFromParent(searchItem);
  });

  return (
    <div className="input-group search-input">
      <div className="input-reset">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search"
        aria-label="Type to search"
        aria-describedby="button-addon2"
        value={searchItem}
        onChange={handleSearchItem}
      />
      <span className="close-icon" onClick={handleResetInput}>&#10006;</span>
      </div>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleSubmitSearch}
      >
        Search
      </button>
    </div>
  )
}
