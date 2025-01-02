import IndexCard from '../../components/IndexCard/IndexCard';
import { motion } from 'framer-motion';

function Index() {

  const textContainer = {
    hidden: { opacity : 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1
      
      }
    }
  }

  const textItem = {
    hidden: { opacity : 0},
    show : {
      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
      duration: 0.3
    }
  }


    return (
        <div id="hero-wrapper" className="px-2 text-offblack">
            <div id="hero-intro-text-container" className="pt-20 pb-10 px-5 font-inter flex flex-col rounded-[1.5rem] bg-gradient-to-br from-[#0b468c] to-[#ac61b9] via-[#d1f7ff] overflow-hidden relative">

                <div id="blob" className="before:absolute before:left-[20%] before:top-[10%] md:before:h-[50%] md:before:w-[30%] before:w-[70%] before:origin-[60%] before:bg-gradient-to-br before:from-[#ac61b9]
                 before:to-[#b7c1de] before:rounded-3xl before:animate-blob before:blur-[50px] before:brightness-125 after:absolute after:left-[40%] after:top-[30%] md:after:h-[80%] md:after:w-[30%] after:w-[70%] after:h-[30%] after:origin-[60%] after:bg-gradient-to-br after:from-[#ac61b9]
                 after:to-[#b7c1de] after:rounded-full after:animate-blob-reverse after:blur-[50px] after:brightness-125"></div>

                
                <motion.div 
                  id="big-hero-text" 
                  className="pt-20 md:pt-40 flex flex-col uppercase z-10"
                  variants={textContainer}
                  initial="hidden"
                  animate="show"
                >
                    <motion.div 
                      className="font-medium hidden md:block md:text-[2.5em]"
                      variants={textItem} 
                    >
                      Ryan is a developer
                    </motion.div>

                    <motion.div 
                      className="font-medium hidden md:block md:text-[2.5em]"
                      variants={textItem}   
                    >
                      with a passion for creating
                    </motion.div>

                    <motion.div 
                      className="font-medium hidden md:block md:text-[2.5em]"
                      variants={textItem}
                    >
                      impactful, engaging solutions.
                    </motion.div>

                    <span id="mobile-text-1" className="font-medium block md:hidden text-mobile-large mt-24">Ryan is</span>
                    <span id="mobile-text-2" className="font-medium block md:hidden text-mobile-large">A developer</span>
                    <span id="mobile-text-3" className="font-medium block md:hidden text-mobile-large">With a passion</span>
                    <span id="mobile-text-4" className="font-medium block md:hidden text-mobile-large">For creating</span>
                    <span id="mobile-text-5" className="font-medium block md:hidden text-mobile-large">Impactful, engaging</span>
                    <span id="mobile-text-6" className="font-medium block md:hidden text-mobile-large">Solutions</span>


                </motion.div>

                <motion.div 
                  id="sub-hero-text-container" 
                  className="flex uppercase mt-8 md:gap-56 z-10"
                  variants={textContainer}
                  initial="hidden"
                  animate="show"
                  
                >
                    <motion.div
                      id="location-text" 
                      className="md:text-[1.15em]"
                      variants={textItem}
                    >
                        Based in VA

                    </motion.div>

                    <motion.div 
                      id="college-affiliation-text" 
                      className="md:text-[1.15em] ml-20 md:ml-0"
                      variants={textItem}
                    >
                        UVA CS '26
                    </motion.div>

                </motion.div>
            </div>


            <div>
                <p className="text-ivory md:text-[2.5em] mt-5 font-inter">Selected Works</p>
            </div>

            <div id="selected-works-wrapper" className='p-2.5'>
                <div id="project-container" className='mt-5'>
                    <div id="projects-header-container" className='text-[0.75rem] uppercase text-slate flex flex-row border-b-2 border-ivory border-opacity-50'>
                        <div id='project-header' className='flex-1 text-left opacity-50'>
                            <p>Project</p>
                        </div>
                        <div id="category-header" className='flex-1 hidden md:block md:text-left opacity-50'>
                            <p className='md:pl-44'>Category</p>
                        </div>
                        <div id='type-header' className='flex-1 hidden md:block md:text-left opacity-50'>
                            <p className="md:pl-44">Type</p>
                        </div>
                        <div id='year-header' className='flex-1 text-left md:text-right opacity-50'>
                            <p>Year</p>
                        </div>
                    </div>

                    <div id="project-cards-wrapper">
                        <IndexCard 
                        projectName="MovieFy"
                        categoryName="Development"
                        typeName="Personal"
                        yearName="2024"
                        projectDescription= {{
                          text: "Developed a web application that streamlines the process of finding and creating Spotify playlists inspired by movies.",
                          details: ["Development", "Fullstack"]
                        }}
                        isViewable= {true}
                        projectLink='http://moviefyapp.com'/>

                        <IndexCard
                        projectName="UCL Predictive Model"
                        categoryName="Development"
                        typeName="Personal"
                        yearName="2024"
                        projectDescription= {{
                          text: "Led the creation of a machine-learning application that predicts the outcome of UEFA Champions League matches",
                          details: ["Development", "Machine-Learning (Scikit-Learn)"]
                        }}
                        isViewable={false}/>
                    </div>


                    
                </div>
            </div>

            
            
        </div>
    )

}
export default Index;
