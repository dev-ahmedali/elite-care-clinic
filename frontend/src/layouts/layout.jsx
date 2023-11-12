import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Router from '../routes/router'

const Layout = () => {
  return (
    <>
     <Header/>
     <main>
        <Router/>
     </main>
     <Footer/>
    </>
  )
}

export default Layout