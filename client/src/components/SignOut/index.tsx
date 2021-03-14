import React from 'react'
import { Context } from '../../context/MainContext'

export const SignOut: React.FC = () => {
  const { auth } = React.useContext(Context)
  return (
    <>
<<<<<<< Updated upstream
=======
    <a href="/admin" className="mr-3 text-white">
      Admin
    </a>
    <a href="/profile" className="mr-3 text-white">
      Профиль
    </a>
>>>>>>> Stashed changes
      <button
        className="btn btn-danger"
        onClick={() => auth.signOut()}
      >
        Sign out
      </button>
    </>
  )
}
