import { motion } from 'framer-motion';
import { useState } from 'react';


const IndexCard = ({projectName, categoryName, typeName, yearName, projectDescription, isViewable}) => {

  const [isActive, setIsActive] = useState(false);


  return (
    <div id="card-wrapper" className="font-inter border-b-2 border-opacity-50 border-ivory" onClick={() => setIsActive(!isActive)}>
      <div id="card-container-content">
        <div id="project-card-header-details" className="hover:bg-ivory hover:text-offblack flex flex-row text-ivory">
          <div id='project-name' className="flex-1 text-left py-2">
            <p>{projectName}</p>
          </div>

          <div id="category-name" className="flex-1 hidden md:block md:text-left py-2">
            <p className="md:pl-44">{categoryName}</p>
          </div>

          <div id="type-name" className="flex-1 hidden md:block md:text-left py-2">
            <p className="md:pl-44">{typeName}</p>
          </div>

          <div id="year-name" className="flex-1 text-left md:text-right py-2">
            <p>{yearName}</p>


          </div>
        </div>

        <motion.div
          id="active-project-wrapper"
          className={`text-ivory ${isActive ? 'block' : 'hidden'} flex h-[50vh] font-inter`}
          initial={{y: -50, opacity: 0}}
          animate={{y: isActive ? 0: -0, opacity: isActive ? 1 : 0}}
          transition={{ duration: 0.3}}
        >
          <div id='active-project-container' className='flex flex-col mt-6'>
            <div id="project-description" className='w-[75%] md:text-[1.75em] md:w-[60%]'>
              {projectDescription}
            </div>

            <div id="view-project" className={`flex mt-3.5 ${isViewable ? 'block' : 'hidden'}`}>
              <button id='view-button' className='bg-blue-500 p-2.5 text-[1rem] rounded-full font-inter'>
                See project
              </button>
            </div>
            
          </div>

        </motion.div>




      </div>
    </div>
    
  )
}

export default IndexCard;
