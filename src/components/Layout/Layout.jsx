import React from 'react'
import Footer from '../Footer/Footer'
import Routers from '../../routes/Routers'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Routers />
        </div>
        <Footer />
    </div>
  )
}

export default Layout