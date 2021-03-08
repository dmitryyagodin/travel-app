import React from 'react'

// export interface MainContextProps {
//   Children: {
//     homePage: object,
//   }
//   homePage: {
//     title: string,
//     subtitle: string,
//   };
// }

const Context = React.createContext({})

export const MainContext = ({ children }) => {
  const homePage = {
    title: 'Home Page',
    subtitle: 'Trave App',
  }
  return (
    <Context.Provider value={{ homePage }}>
      {children}
    </Context.Provider>
  )
}
