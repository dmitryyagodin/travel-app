import React from 'react'
import { Context } from '../../context/MainContext'

export const SignOut: React.FC = () => {
  const { auth } = React.useContext(Context)
  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => auth.signOut()}
      >
        Sign out
      </button>
    </>
  )
}
