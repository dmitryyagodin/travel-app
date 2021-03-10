import React from 'react';
import './Search-panel.scss'

export const SearchPanel: React.FC = () => {
  return (
    <div className="input-group search-input">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search"
        aria-label="Type to search"
        aria-describedby="button-addon2"
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
