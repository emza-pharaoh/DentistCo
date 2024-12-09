import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Services from './components/services/Services';
import ContactUs from './components/ContactUs/ContactUs'

const App = () => {
  return (
    <div className='overflow-x-hidden' >
      <div>
        <Navbar />
        <Hero />
        <Services />
        <ContactUs />
      </div>
    </div>
  )
}

export default App
