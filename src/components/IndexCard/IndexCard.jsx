import { motion } from 'framer-motion';
import { useState } from 'react';


const IndexCard = ({projectName, categoryName, typeName, yearName, projectDescription, isViewable, 
  projectLink = 'none', }) => {

  const [isActive, setIsActive] = useState(false);

  const container = {
    still: {x:0},
    move: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const leftHeader = {
    still: { x: 0 },
    move: {
      x: [0, 10, 20],
      transition: { times: [0, 0.15, 0.3]}
    }
  }

  const rightHeader = {
    still: { x: 0},
    move: {
      x: [0, -10, -20],
      transition: { times: [0, 0.15, 0.3]}
    }
  }


  return (
    <div id="card-wrapper" className="font-inter border-b-2 border-opacity-50 border-ivory">
      <div id="card-container-content">
        <motion.div 
          id="project-card-header-details" 
          className="group hover:bg-ivory hover:text-offblack flex flex-row text-ivory transition-colors ease-in duration-[0.25s]"
          onClick={ () => setIsActive(!isActive)}
          variants={container}
          initial="still"
          whileHover="move"
        
        >
          <motion.div 
            id='project-name' 
            className="flex-1 text-left py-2"
            variants={leftHeader}
          >
            <p className=''>{projectName}</p>
          </motion.div>

          <div id="category-name" className="flex-1 hidden md:block md:text-left py-2">
            <p className="md:pl-44">{categoryName}</p>
          </div>

          <div id="type-name" className="flex-1 hidden md:block md:text-left py-2">
            <p className="md:pl-44">{typeName}</p>
          </div>

          <motion.div 
            id="year-name" 
            className="flex-1 text-left md:text-right py-2"
            variants={rightHeader}
          >
            <p className=''>{yearName}</p>
          </motion.div>

        </motion.div>

        <motion.div
          id="active-project-wrapper"
          className={`text-ivory ${isActive ? 'block' : 'hidden'} flex h-[50vh] font-inter`}
          initial={false}
          animate={{y: isActive ? 10: -0, opacity: isActive ? 1 : 0}}
          transition={{ ease: "easeOut", duration: 0.5}}
        >
          <div id='active-project-container' className='flex flex-col mt-6'>
            <div id="project-description" className='w-[75%] text-0.[75em] md:text-[1.75em] md:w-[60%]'>
              {projectDescription.text}
            </div>

            <div id="view-project" className={`flex mb-2 mt-3.5 ${isViewable ? 'block' : 'hidden'}`}>
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <button id='view-button' className='bg-ivory text-offblack p-2.5 text-[1rem] rounded-3xl font-inter'>
                  See website
                </button>
              </a>
            </div>

            <div id='extra-details' className='flex items-start p-0 m-0'>
              <ul id='details-ul' className='text-[1rem] mt-2.5 md:text-[1em] text-[0.8em] flex flex-row md:flex-col list-none p-0 m-0'>
                {projectDescription.details.map((detail, index) => {
                  return (
                    <li
                      key={index}
                      className={`items-start md:mt-1 ${index !== 0 ? 'ml-5 md:mt-2.5 md:ml-0 ' : ''}`}
                    >
                      <div className='flex flex-row items-start'>

                        <div className="bg-white rounded-full text-white text-[12px] font-inter w-2 h-2 mr-[5px] mt-[7px] block"></div>
                        {detail}
                      </div>
                    </li>
                  )
                })}
              </ul>

            </div>

            
          </div>

        </motion.div>




      </div>
    </div>
    
  )
}

export default IndexCard;
