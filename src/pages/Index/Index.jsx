import IndexCard from '../../components/IndexCard/IndexCard';

function Index() {
    return (
        <div id="hero-wrapper" className="px-2 text-offblack">
            <div id="hero-intro-text-container" className="pt-20 pb-10 px-5 font-inter flex flex-col rounded-[1.5rem] bg-gradient-to-br from-[#0b468c] to-[#ac61b9] via-[#d1f7ff] overflow-hidden relative">

                <div id="blob" className="before:absolute before:left-[20%] before:top-[10%] md:before:h-[50%] md:before:w-[30%] before:w-[70%] before:origin-[60%] before:bg-gradient-to-br before:from-[#ac61b9]
                 before:to-[#b7c1de] before:rounded-3xl before:animate-blob before:blur-[50px] before:brightness-125 after:absolute after:left-[40%] after:top-[30%] md:after:h-[80%] md:after:w-[30%] after:w-[70%] after:h-[30%] after:origin-[60%] after:bg-gradient-to-br after:from-[#ac61b9]
                 after:to-[#b7c1de] after:rounded-full after:animate-blob-reverse after:blur-[50px] after:brightness-125"></div>

                
                <div id="big-hero-text" className="pt-20 md:pt-40 flex flex-col uppercase z-10">
                    <span className="font-medium hidden md:block md:text-[2.5em]">Ryan is a developer </span>
                    <span className="font-medium hidden md:block md:text-[2.5em]">with a passion for creating </span>
                    <span className="font-medium hidden md:block md:text-[2.5em]">impactful, engaging solutions.</span>

                    <span id="mobile-text-1" className="font-medium block md:hidden text-mobile-large mt-24">Ryan is</span>
                    <span id="mobile-text-2" className="font-medium block md:hidden text-mobile-large">A developer</span>
                    <span id="mobile-text-3" className="font-medium block md:hidden text-mobile-large">With a passion</span>
                    <span id="mobile-text-4" className="font-medium block md:hidden text-mobile-large">For creating</span>
                    <span id="mobile-text-5" className="font-medium block md:hidden text-mobile-large">Impactful, engaging</span>
                    <span id="mobile-text-6" className="font-medium block md:hidden text-mobile-large">Solutions</span>


                </div>

                <div id="sub-hero-text-container" className="flex uppercase mt-8 md:gap-56 z-10">
                    <div id="location-text" className="md:text-[1.15em]">
                        Based in VA

                    </div>

                    <div id="college-affiliation-text" className="md:text-[1.15em] ml-20 md:ml-0">
                        UVA CS '26
                    </div>

                </div>
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
                        yearName="2024" />

                        <IndexCard
                        projectName="UCL Predictive Model"
                        categoryName="Development"
                        typeName="Personal"
                        yearName="2024" />
                    </div>


                    
                </div>
            </div>

            
            
        </div>
    )

}
export default Index;