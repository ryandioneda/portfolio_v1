import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const opacity = {
        open: { opacity: 1, transition: {duration: 0.15}},
        closed: {opacity : 0, transition: {duration: 0.15}},
    };

    
    const navItemVariants = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24}
      },
      closed: { opacity: 0, y: 20, transition: { duration : 0.2 }}
    }      



  

    return (
        <div id='nav-wrapper' className="bg-black w-full p-2.5 font-inter sm:bg-slate border-b-2 border-slate border-opacity-50 sticky z-20">
            <nav id='nav-elements-container' className="flex uppercase font text-m font-normal justify-start">
                <div id='name-link-container' className='px-2.5 py-1 text-ivory font-semibold'>
                    <Link to="/" onClick={() => setIsOpen(false)}>Ryan Dioneda</Link>
                </div>

                {/* Burger & Burger Toggle effect */}
                <div onClick={() => {setIsOpen(!isOpen)}} className="bg-black flex flex-grow gap-1 justify-end cursor-pointer sm:hidden">

                    <div className='flex gap-2'>
                        <div className='py-2.5 flex flex-col gap-1'>
                            <motion.p 
                              id='burger-bar' 
                              className='w-6 h-0.5 bg-ivory' 
                              animate={isOpen ? { rotate: 45, y: 6} : { rotate: 0, y: 0}} transition={{duration: 0.3}}>
                            </motion.p>
                            <motion.p 
                              id='burger-bar' 
                              className='w-6 h-0.5 bg-ivory' animate={isOpen ? { opacity: 0 } : { opacity: 1}} 
                              transition={{duration: 0.205}}>
                            </motion.p>
                            <motion.p 
                              id='burger-bar' 
                              className='w-6 h-0.5 bg-ivory' 
                              animate={isOpen ? { rotate: -45, y: -6} : { rotate: 0, y: 0}} transition={{duration: 0.3}}>
                            </motion.p>
                        </div>
                        

                        <div className='py-1 font-semibold text-ivory'>
                            <motion.p 
                            className='absolute'
                            variants={opacity} 
                            animate={!isOpen ? "open" : "closed"}>
                                Menu
                            </motion.p>
                            <motion.p 
                            variants={opacity} 
                            animate={isOpen ? "open" : "closed"}>
                                Close
                            </motion.p>
                        </div>
                       
                    </div>
                </div>


                {/* Mobile Menu Links Container */}
                <motion.ul 
                    id="mobile-menu-links-container" 
                    className={`text-ivory font-bold text-mobile-large bg-black absolute top-10 left-0 flex flex-col justify-start w-full sm:hidden 
                      ${isOpen ? 'block' : 'hidden'} rounded-b-[1.5em] h-[10em] mt-4`} 
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: isOpen ? 0 : -0, opacity: isOpen ? 1 : 0 }} 
                    transition={{ duration: 0.3 }}>


                    <motion.li
                      className='mt-5'
                      variants={navItemVariants}
                    >
                      <Link to="/about" className='px-5 py-1 sm:hover:text-offblack sm:hover:opacity-40' onClick={() => setIsOpen(false)}>About</Link>
                    </motion.li>
                

                    <motion.li
                      className='mt-2.5'
                      variants={navItemVariants}
                    >
                      <Link to="/contact" className='px-5 py-1 sm:hover:text-offblack sm:hover:opacity-40' onClick={() => setIsOpen(false)}>Contact</Link>
                    </motion.li>

                  
                    <motion.li
                      className='mt-2.5'
                      variants={navItemVariants}
            
                    >
                      <a 
                        href="https://www.linkedin.com/in/ryan-dioneda/" 
                        className='px-5 py-1 sm:hover:text-offblack sm:hover:opacity-40' 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                      LinkedIn
                      </a>
                  
                    </motion.li>
                   


                </motion.ul>

                <div id='links-container' className={`font-semibold text-ivory right-0 top-full ml-auto ${isOpen ? "hidden" : "hidden"} sm:flex justify-end gap-3`}>
                    <Link to="/about" className='px-3 py-1 sm:hover:text-offblack sm:hover:opacity-40'>About</Link>
                    <Link to="/contact" className='px-3 py-1 sm:hover:text-offblack sm:hover:opacity-40'>Contact</Link>
                    <a 
                      href="https://www.linkedin.com/in/ryan-dioneda/" 
                      className='px-3 py-1 sm:hover:text-offblack sm:hover:opacity-40' 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      LinkedIn
                    </a>

                </div>


            </nav>
            
        </div>
    )
}
export default Nav;
