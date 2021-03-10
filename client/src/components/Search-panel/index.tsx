import React, {useState} from 'react';
import './Search-panel.scss'

export const SearchPanel: React.FC = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleSearchItem = (e: {target: { value: React.SetStateAction<string>; }}): void => {
    setSearchItem(e.target.value);
  }

  return (
    <div className="input-group search-input">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search"
        aria-label="Type to search"
        aria-describedby="button-addon2"
        value={searchItem}
        onChange={handleSearchItem}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  )
}
