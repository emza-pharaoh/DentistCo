import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Services from './components/services/Services';
import ContactUs from './components/ContactUs/ContactUs'
import GoogleMap from './components/GoogleMaps/GoogleMap'
import DrInfo from './components/DrInfo/DrInfo';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div className='overflow-x-hidden bg-white dark:bg-gray-900' >
      <div>
        <Navbar />
        <Hero />
        <Services />
        <ContactUs />
        <GoogleMap />
        <DrInfo />
        <Footer />
      </div>
    </div>
  )
}

export default App
