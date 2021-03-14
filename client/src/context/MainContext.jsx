<<<<<<< Updated upstream
import React from 'react'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
=======
import React from 'react';
import { useLocation } from "react-router-dom";
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
import { useAuthState } from 'react-firebase-hooks/auth';
>>>>>>> Stashed changes

var firebaseConfig = {
  apiKey: "AIzaSyA65k6MEJoBJlYG3MY7iosoGuHUb1gkimk",
  authDomain: "travel-app-dcc3f.firebaseapp.com",
  projectId: "travel-app-dcc3f",
  storageBucket: "travel-app-dcc3f.appspot.com",
  messagingSenderId: "19052676810",
  appId: "1:19052676810:web:1a48ac54137f51ca5e1633"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Context = React.createContext()

const auth = firebase.auth()
const firestore = firebase.firestore()

<<<<<<< Updated upstream
firestore.collection('countries').doc('data').get().then(doc => {
  if (doc.exists) {
    console.log(doc.data());
  }
})

export const MainContext = ({ children }) => {
  const [user] = useAuthState(auth)
=======
export const MainContext = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const [countries, setCountries] = React.useState([])

  React.useEffect(() => {
    firestore.collection("countries")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => setCountries(prev => [...prev, doc.data()]));
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [])

>>>>>>> Stashed changes
  const homePage = {
    title: 'Home Page',
    subtitle: 'Travel App',
  }
  return (
<<<<<<< Updated upstream
    <Context.Provider value={{ homePage, user, firebase, auth, firestore }}>
=======
    <Context.Provider value={{
      homePage,
      user,
      auth,
      firestore,
      location,
      countries
    }}>
>>>>>>> Stashed changes
      {children}
    </Context.Provider>
  )
}
