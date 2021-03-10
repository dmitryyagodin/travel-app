import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import {SearchPanel} from '../Search-panel/index';
import {SelectLang} from '../Select-lang/index';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/allcountries" className="header-link">Travel App</Link>
      <SearchPanel />
      <SelectLang />
    </header>
  )
}
