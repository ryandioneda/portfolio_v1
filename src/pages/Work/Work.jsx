import { motion } from "framer-motion";


function Work() {
    
    const container = {
      hidden: { 
        y: 40,
        opacity: 0 
      },
      show: {
        y: 0,    
        opacity: 1,  
        transition: {
          duration: 0.6,  
          ease: "easeOut",  
        }
      }
    };

  
    return (
        <motion.div 
          id="work-wrapper" 
          className="p-2 5 font-inter"
          variants={container}
          initial="hidden"
          animate="show"
        >
            <div id="main-work-container" className="p-2 grid grid-cols-1 md:grid-cols-2">
                <div id="grid-col-1" className="col-span-1 p-1 md:flex md:justify-center">
                    <div id="work-heading" className="text-slate opacity-50 text-[1.5rem] md:text-[3rem] mb-10 md:mb-0">
                        <p>My Work</p>
                    </div>
                </div>

                <div id="grid-col-2" className="col-span-1 p-1 text-ivory text-[1.15rem] md:text-[1.5rem] md:flex md:justify-start">
                    <div id="cards-wrapper">
                        Cards!
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work;
