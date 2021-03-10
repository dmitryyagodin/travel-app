import React from 'react'
import { Context } from '../../context/MainContext'
import { SignIn } from '../SignIn'
import { SignOut } from '../SignOut'
import './Header.scss'

export const Header: React.FC = () => {
  const { user } = React.useContext(Context)
  return (
    <header>
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
