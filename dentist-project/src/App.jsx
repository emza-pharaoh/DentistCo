import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"

const App = () => {
  return (
    <div className='overflow-x-hidden' >
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App