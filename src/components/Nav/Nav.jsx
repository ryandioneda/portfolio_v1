import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

    const [isActive, setIsActive] = useState(false);

    const opacity = {
        open: { opacity: 1, transition: {duration: 0.15}},
        closed: {opacity : 0, transition: {duration: 0.15}},
    };

    return (
        <div id='nav-wrapper' className="bg-offblack w-full p-2.5 font-inter sm:bg-gray-500 border-b-2 border-gray-500 border-opacity-50 sticky">
            <nav id='nav-elements-container' className="flex uppercase font text-m font-normal justify-start">
                <div id='name-link-container' className='px-2.5 py-1 text-ivory font-semibold'>
                    <Link to="/">Ryan Dioneda</Link>
                </div>

                {/* Burger & Burger Toggle effect */}
                <div onClick={() => {setIsActive(!isActive)}} className="bg-offblack flex flex-grow gap-1 justify-end cursor-pointer sm:hidden">

                    <div className='flex gap-2'>
                        <div className='py-2.5 flex flex-col gap-1'>
                            <motion.p id='burger-bar' className='w-6 h-0.5 bg-ivory' animate={isActive ? { rotate: 45, y: 6} : { rotate: 0, y: 0}} transition={{duration: 0.3}}></motion.p>
                            <motion.p id='burger-bar' className='w-6 h-0.5 bg-ivory' animate={isActive ? { opacity: 0 } : { opacity: 1}} transition={{duration: 0.205}}></motion.p>
                            <motion.p id='burger-bar' className='w-6 h-0.5 bg-ivory' animate={isActive ? { rotate: -45, y: -6} : { rotate: 0, y: 0}} transition={{duration: 0.3}}></motion.p>
                        </div>
                        

                        <div className='py-1 font-semibold text-ivory'>
                            <motion.p 
                            className='absolute'
                            variants={opacity} 
                            animate={!isActive ? "open" : "closed"}>
                                Menu
                            </motion.p>
                            <motion.p 
                            variants={opacity} 
                            animate={isActive ? "open" : "closed"}>
                                Close
                            </motion.p>
                        </div>
                       
                    </div>
                </div>


                {/* Mobile Menu Links Container */}
                <motion.div 
                    id="mobile-menu-links-container" 
                    className={`text-ivory font-bold text-mobile-large bg-offblack absolute top-10 left-0 flex flex-col justify-start w-full sm:hidden ${isActive ? 'block' : 'hidden'} rounded-b-[1.5em] h-[10em] mt-4`} 
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: isActive ? 0 : -0, opacity: isActive ? 1 : 0 }} 
                    transition={{ duration: 0.3 }}>
                    
                    <Link to="/" className='px-5 py-1 sm:hover:text-offblack sm:hover:opacity-40'>Work</Link>
                    <Link to="/about" className='px-5 py-1 sm:hover:text-offblack sm:hover:opacity-40'>About</Link>
                    <Link to="/contact" className='px-5 py-1 sm:hover:text-offblack sm:hover:opacity-40'>Contact</Link>
                </motion.div>

                {/* If the menu is active show this vertically*/}
                <div id='links-container' className={`font-semibold text-ivory right-0 top-full ml-auto ${isActive ? "hidden" : "hidden"} sm:flex justify-end gap-3`}>
                    <Link to="/" className='px-3 py-1 sm:hover:text-offblack sm:hover:opacity-40'>Work</Link>
                    <Link to="/about" className='px-3 py-1 sm:hover:text-offblack sm:hover:opacity-40'>About</Link>
                    <Link to="/contact" className='px-3 py-1 sm:hover:text-offblack sm:hover:opacity-40'>Contact</Link>


                </div>


            </nav>
            
        </div>
    )
}
export default Nav;