import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body">
        {children}
      </div>
      <Footer />
    </>
  )
}
