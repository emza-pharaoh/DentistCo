import React from 'react';
import Logo from "../../assets/brand/Logo.png";
import DarkMode from '../DarkMode';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';
import SideBarView from "./SideBarView";
export const MenuLinks = [
    {
        id: 1,
        name: "About",
        link: "/#about"
    },
    {
        id: 2,
        name: "Services",
        link: "/#Services"
    },
    {
        id: 3,
        name: "Projects",
        link: "/#projects"
    }
]

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <>
    <nav className='bg-gray-200 dark:bg-black dark:text-white'>
        <div className="container py-3 md:py-2">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div> 
                    <a href="#" className='flex items-center gap-3'>
                        <img src={Logo} alt="Logo" className='w-7'/>

                        <span className='text-2xl sm:text-2xl font-semibold'>
                        DentistCo
                        </span>
                    </a>
                        
                </div>
                {/* Desktop NavLinks */}
                <div className=' hidden md:block xl:pl-[550px] '>
                    <ul className='flex items-center gap-8'>
                        {
                            MenuLinks.map(({id, name, link}) => {
                                return (
                                    <li key={id} className='cursor-pointer py-4'>
                                        <a href="#" className='text-lg font-medium 
                                        hover:border-b-2
                                        hover:border-primary
                                        hover:text-primary py-2
                                        transition-all duration-300'>{name}</a>
                                    </li>
                                )
                            })
                        }
                        <button className="btn-primary">Get In Touch</button>
                        <button>
                            <DarkMode/>
                        </button>
                    </ul>
                </div>

                {/* Mobile Navlinks */}
                <div className='flex gap-2 items-center'>
                    <div className=" xl:hidden md:hidden">
                    <DarkMode/>
                    </div>
                   
                    {
                        showMenu ?
                         (<BiMenuAltRight onClick={toggleMenu} className='text-3xl md:hidden' />
                        ) :
                         (<BiMenuAltLeft onClick={toggleMenu} className='text-3xl md:hidden' />
                         )
                    }
                    
                </div>
            </div>
        </div>
        {/* Sidebar For mobile navlinks */}
        <SideBarView showMenu={showMenu}/>
    </nav>
    </>
  )
}

export default Navbar