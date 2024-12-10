import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const dentistDetails = [
    {
      id: 1,
      name: "Dr. Sipho Dlamini",
      title: "General Dentist",
      qualification: "BDS, University of KwaZulu-Natal",
      speech: "As a proud Zulu dentist, I aim to provide comprehensive dental care while making every visit comfortable and stress-free for my patients.",
      image: "https://images.pexels.com/photos/5355866/pexels-photo-5355866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "sipho.dlamini@dentalcare.co.za",
      phone: "+27 82 123 4567",
    },
    {
      id: 2,
      name: "Dr. Nigesh Naidoo",
      title: "Orthodontist",
      qualification: "DDS, Specialist in Orthodontics",
      speech: "With roots in South Africa's rich Indian heritage, I’m committed to perfecting smiles through precise and compassionate orthodontic care.",
      image: "https://images.pexels.com/photos/5888176/pexels-photo-5888176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "priya.naidoo@dentalcare.co.za",
      phone: "+27 83 234 5678",
    },
    {
      id: 3,
      name: "Dr. Derick Johnson",
      title: "Cosmetic Dentist",
      qualification: "BDS, MSc in Cosmetic Dentistry",
      speech: "I am passionate about transforming smiles and helping patients regain their confidence. Every smile tells a story, and I love being part of that journey.",
      image: "https://images.pexels.com/photos/6627367/pexels-photo-6627367.jpeg",
      email: "sarah.johnson@dentalcare.co.za",
      phone: "+27 84 345 6789",
    },
    {
      id: 4,
      name: "Dr. James Carter",
      title: "Dental Implant Specialist",
      qualification: "BDS, Fellowship in Implant Dentistry",
      speech: "Dental implants change lives. My goal is to provide durable and natural-looking solutions for missing teeth, helping patients eat, speak, and smile with confidence.",
      image: "https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg",
      email: "james.carter@dentalcare.co.za",
      phone: "+27 85 456 7890",
    },
  ];



const DrInfo = () => {
    // Settings for the Slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "Linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

  return (
    <>
        <div className="py-10 bg-white dark:bg-gray-900 dark:text-white">
            <div className="container">
            {/* Doctor Info Section */}
             <div>
                <Slider {...settings} className=" p-1">
                    {dentistDetails.map((Info) => {
                        return(
                        <div key={Info.id} className="w-full shadow-md rounded-2xl dark:bg-gray-800">
                            
                            <h1 className="text-3xl text-center font-semibold
                             text-violet-900 dark:text-primary 
                              p-6 drop-shadow-2xl"> Our Specialists</h1>

                            <div className="grid grid-cols-1 lg:grid-cols-2 pl-7 pb-5 md:pb-1">
                                 {/* Dentist Image */}
                            <div className='w-[300px]'>
                                <img src={Info.image} alt="" className='max-w-[480px] h-[420px] md:pl-[50%] md:pb-10'/>
                            </div>
                            {/* Text Section */}
                            <div className='flex flex-col items-start gap-2 md:pr-16 md:pt-10'>
                                <div className="text-4xl font-poppins">{Info.name}</div>
                                <div className="text-2xl font-thin">{Info.title}</div>
                                <div className="text-base font-thin">{Info.qualification}</div>
                                <div className="text-lg font-thin">{Info.speech}</div>
                                <div className='pt-5'>
                                <div className='flex row gap-4 items-center'>
                                <BsTelephone className="size-5"/>
                                <p className='text-gray-800 dark:text-gray-300'>{Info.phone} </p>
                                </div>

                                <div className='flex row gap-4 items-center'>
                                <CiMail className="size-5"/>
                                <p className='text-gray-800 dark:text-gray-300'>bookingA@dentistco.co.za </p>
                                </div>
                                </div>
                               
                            </div>
                            </div>
                           


                        </div>
                        );
                    })}
                </Slider>
             </div>
            </div>
        </div>
    </>
  )
}

export default DrInfo
