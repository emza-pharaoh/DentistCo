import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Services from './components/services/Services';
import ContactUs from './components/ContactUs/ContactUs'
import GoogleMap from './components/GoogleMaps/GoogleMap'
import DrInfo from './components/DrInfo/DrInfo';
import Footer from './components/Footer/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from 'aos'
import 'aos/dist/aos.css';
const App = () => {

React.useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    offset: 100,
    delay: 100,
  })
  AOS.refresh();
}, [])


  return (
    <div className='overflow-x-hidden bg-white dark:bg-gray-900 duration-300' >
     
        <Navbar />
        <Hero />
        <Services />
        <ContactUs />
        <GoogleMap />
        <DrInfo />
        <Footer />
      
    </div>
  )
}

export default App
