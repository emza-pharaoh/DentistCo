import React from 'react'
import HeroImg from '../../assets/img/HeroPic.png';

const Hero = () => {
  return (
    <>
    <main className='bg-white dark:bg-gray-900 dark:text-white duration-300'>
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
            <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 items-center'>
                {/* Image Section */}
                <div data-aos="zoom-in" className='order-1 sm:order-2 relative'>
                <img src={HeroImg} alt="Pic" className='rounded-2xl'/>

                </div>
                {/* Text Section */}
                <div  className='space-y-5 order-2 sm:order-1'>
                    <h1 data-aos="fade-up" className='text-4xl sm:text-5xl font-semibold'>Build a Beautiful and Healthy Smile with <span className='text-primary'>DentistCo</span> </h1>
                    <p data-aos="fade-up" data-aos-delay="200">
                    Experience exceptional dental care in a comfortable and welcoming environment. 
                    Our team of skilled professionals is dedicated to helping you achieve and maintain a healthy, confident smile. 
                    From routine cleanings and preventive care to advanced cosmetic and restorative treatments, we tailor our services to meet your unique needs.
                     Your journey to optimal oral health starts here. Book your appointment today and let us bring out the best in your smile!
                    </p>

                    <button data-aos="fade-up" data-aos-delay="200" className='btn-primary'>Book An Appointment</button>
                </div>
            </div>
        </div>
    </main>
      
    </>
  )
}

export default Hero
