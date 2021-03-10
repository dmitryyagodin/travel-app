import React from 'react'
import { Context } from '../../context/MainContext'

export const SignIn: React.FC = () => {
  const { firebase, auth } = React.useContext(Context)

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
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
