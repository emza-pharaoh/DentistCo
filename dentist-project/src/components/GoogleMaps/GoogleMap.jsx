import React from 'react'

const GoogleMap = () => {
  return (
    <>
    <div className='text-center  bg-white dark:bg-slate-800 rounded-2xl'>

    <h1 className='text-4xl font-semibold text-violet-900 dark:text-violet-300 animate-pulse'>Locate Us</h1>

    {/* Map Container */}
    <div className=' m-5 self-center shadow-2xl'>
    <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.6518723437252!2d30.829347375752338!3d-29.834258421561728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6fee8bbdddd6f%3A0xd28ea7e8784fdd81!2s15%20Holzner%20Rd%2C%20Mariannhill%20Park%2C%20Pinetown%2C%203610!5e1!3m2!1sen!2sza!4v1733749452787!5m2!1sen!2sza" 
    width="100%" height="480px"
    allowfullscreen="" 
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


    </div>
      
    
    </>
  )
}

export default GoogleMap
