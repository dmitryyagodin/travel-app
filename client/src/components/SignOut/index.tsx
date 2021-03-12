import React from 'react'
import { Context } from '../../context/MainContext'

export const SignOut: React.FC = () => {
  const { auth } = React.useContext(Context)
  return (
    <>
    <a href="/" className="mr-3">
      Профиль
    </a>
      <button
        className="btn btn-danger"
        onClick={() => auth.signOut()}
      >
        Sign out
      </button>
    </>
  )
}
