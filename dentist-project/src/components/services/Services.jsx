import React from 'react'
import { FaTooth } from "react-icons/fa";
import CosmeticIcon from '../../assets/icons/Cosmetic.png'
import VeneerIcon from '../../assets/icons/Veneers.png'
import WhiteningIcon from '../../assets/icons/Whitening.png'
import ImplantIcon from '../../assets/icons/implant.png'

const ServiceData = [
    {
      name: "Cosmetic Dentistry",
      icon: <img src={CosmeticIcon} alt="Cosmetic Icon" className='size-20 bg-primary p-2 rounded-xl'/>,
      link: "#",
      description: "Transform your smile with advanced cosmetic dental solutions tailored to enhance your appearance and confidence.",
      aosDelay: "0",
    },
    {
      name: "Dental Veneers",
      icon: <img src={VeneerIcon} alt="Veneer Icon" className='size-20 bg-primary p-2 rounded-xl'/>,
      link: "#",
      description: "Achieve a flawless smile with custom-crafted dental veneers designed to correct imperfections.",
      aosDelay: "100",
    },
    {
      name: "Dental Implants",
      icon: <img src={ImplantIcon} alt="Implant Icon" className='size-20 bg-primary p-2 rounded-xl'/>,
      link: "#",
      description: "Replace missing teeth with durable and natural-looking dental implants for improved functionality and aesthetics.",
      aosDelay: "200",
    },
    {
      name: "Teeth Whitening",
      icon: <img src={WhiteningIcon} alt="WhiteningIcon" className='size-20 bg-primary p-2 rounded-xl'/>,
      link: "#",
      description: "Brighten your smile with professional teeth whitening treatments for a radiant and confident look.",
      aosDelay: "300",
    },
  ];


const Services = () => {
  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
            {/* Header Section */}
            <div className="text-center pb-12 space-y-3">
                <h1 className="text-3xl font-semibold text-violet-950 dark:text-primary">Explore Our Services</h1>
                <p>We Are Dental Healthcare Professionals Who Ensure 5 Star Dental Health To All Our Clients</p>
            </div>
            {/* Card Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
                {ServiceData.map((service) => {
                return (
                <div key={service.name} className="card space-y-3 sm:space-y-4 p-4">
                    <h3 className='text-lg font-semibold '>{service.name}</h3>
                    {service.icon}
                    <p className='text-gray-600 dark:text-gray-400'>{service.description}</p>
                </div>);})}
            </div>
            {/* btn Section */}
            <div className='text-center mt-6'>
                <button className="btn-primary " >Lear More</button>
            </div>
            
           
        </div>
    </div>
    </>
  )
}

export default Services
