import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const ContactUs = () => {
  return (
    <>
    <div>
        <div className="container bg-white dark:bg-gray-900 dark:text-white mt-10 mb-10">
            <div className="grid md:grid-cols-2 sm:grid-cols-1">

            {/* Left Adress Section */}
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl flex flex-col gap-9 mb-10 p-5">
            
            <h1 className="text-4xl font-semibold">Get in touch</h1>

            <p className='text-gray-600 dark:text-gray-300'>
            Have questions about your dental health, or want to book an appointment?
            We're here to help! Reach out to us today, and our friendly team will ensure you receive the care and attention you deserve. 
            Whether you're looking for routine check-ups, cosmetic enhancements, or advanced dental treatments, we’re just a message away
            </p>
            {/* Adress Info and Etc */}
            <div className='flex flex-col gap-2 mb-5'>
                <div className='flex row gap-4 items-center'>
                    <FaRegBuilding className="size-5"/>
                    <p className='text-gray-800 dark:text-gray-300'>9 Santa Diana,<br/>15 Holzner, Durban, 3610</p>
                </div>
                <div className='flex row gap-4 items-center'>
                    <BsTelephone className="size-5"/>
                    <p className='text-gray-800 dark:text-gray-300'>+27 98 876 5621 </p>
                </div>
                <div className='flex row gap-4 items-center'>
                    <CiMail className="size-5"/>
                    <p className='text-gray-800 dark:text-gray-300'>bookingA@dentistco.co.za </p>
                </div>
                
            </div>

            </div>
            {/* Contact Form Section */}
            <div className='pt-5'>
                <div className=' rounded-md flex flex-col gap-3 m-1 h-full'>
                    {/* First Name & Last Name */}
                    <div className='flex flex-row gap-2 ml-5 mr-5'>
                        <input type="text" placeholder='FirstName' className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-1 focus:ring-primary' />
                        <input type="text" placeholder='LastName' className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-1 focus:ring-primary' />
                    </div>

                    <input type="email" placeholder='Email' className='border border-gray-300 rounded-lg p-2 ml-5 mr-5  focus:outline-none focus:ring-1 focus:ring-primary ' />
                    
                    <input type="number" placeholder='Phone Number' className='border border-gray-300 rounded-lg p-2 ml-5 mr-5  focus:outline-none focus:ring-1 focus:ring-primary ' />

                    <input type="text" placeholder='Message' className='border border-gray-300 rounded-lg p-2 ml-5 mr-5 h-[150px] focus:outline-none focus:ring-1 focus:ring-primary ' />

                    {/* Send Message Button */}
                    <div className='self-center w-full pr-5 pl-5'>
                        <button className='btn-primary w-full'>Send Message</button>
                    </div>
                </div>
            </div>

                
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ContactUs