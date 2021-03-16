import React from 'react';
import { useLocation } from "react-router-dom";
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

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
export const fire = firebase

const auth = firebase.auth()
const firestore = firebase.firestore()



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

  const homePage = {
    title: 'Home Page',
    subtitle: 'Travel App',
  }

  const [userMark, setUserMark] = React.useState(0)
  
  return (
    <Context.Provider value={{
      homePage,
      user,
      firebase,
      auth,
      firestore,
      location,
      countries,
      userMark,
      setUserMark,
    }}>
      {children}
    </Context.Provider>
  )
}
