import React, { useState, useEffect } from 'react';
import { Context } from '../../context/MainContext';
import { SignOutItem } from '../../interfaces/interfaces';
import { HeaderData } from '../../assets/translations/header-data';

export const SignOut: React.FC<SignOutItem> = (props) => {
  const { auth } = React.useContext(Context);
  const langItem: string = props.langValue;
  const [value, setValue] = useState('Sign out');

  useEffect(() => {
    switch(langItem) {
      case 'en':
        setValue(HeaderData.logoutButton.en);
        break;
      case 'ru':
        setValue(HeaderData.logoutButton.ru);
        break;
      case 'es':
        setValue(HeaderData.logoutButton.es);
        break;
      default:
        setValue(HeaderData.logoutButton.en);
    }
  }, [langItem]);

  return (
    <>
    <a href="/admin" className="mr-3 text-white">
      Admin
    </a>
    <a href="/" className="mr-3 text-white">
      Профиль
    </a>
      <button
        className="btn btn-danger"
        onClick={() => auth.signOut()}
      >
        {value}
      </button>
    </>
  )
}
