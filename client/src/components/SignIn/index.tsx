<<<<<<< Updated upstream
import React from 'react'
import { Context } from '../../context/MainContext'

export const SignIn: React.FC = () => {
  const { firebase, auth } = React.useContext(Context)
=======
import React, { useState, useEffect } from 'react';
import { Context, fire } from '../../context/MainContext';
import { SignInItem } from '../../interfaces/interfaces';
import { HeaderData } from '../../assets/translations/header-data';

export const SignIn: React.FC<SignInItem> = (props) => {
  const { auth } = React.useContext(Context);
  const langItem =  props.langValue;
  const [value, setValue] = useState('Sign in with Google');

  useEffect(() => {
    switch(langItem) {
      case 'en':
        setValue(HeaderData.loginButton.en);
        break;
      case 'ru':
        setValue(HeaderData.loginButton.ru);
        break;
      case 'es':
        setValue(HeaderData.loginButton.es);
        break;
      default:
        setValue(HeaderData.loginButton.en);
    }
  }, [langItem]);
>>>>>>> Stashed changes

  const signInWithGoogle = () => {
    const provider = new fire.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </>
  )
}
