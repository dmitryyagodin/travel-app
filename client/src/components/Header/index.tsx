import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import {SearchPanel} from '../Search-panel/index';
import {SelectLang} from '../Select-lang/index';
import { Context } from '../../context/MainContext'
import { SignIn } from '../SignIn'
import { SignOut } from '../SignOut'
import './Header.scss'

export const Header: React.FC = () => {
  const { user } = React.useContext(Context)
  return (
    <header className="header">
      <Link to="/allcountries" className="header-link">Travel App</Link>
      <SearchPanel />
      <SelectLang />
      <div className="header">
        <div className="header__logo">
          Travel APP
        </div>
        <div className="header__sign">
          {user ? <SignOut /> : <SignIn />}
        </div>
      </div>
    </header>
  )
}
