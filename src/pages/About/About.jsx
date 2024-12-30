import Headshot from '../../assets/headshot1.jpg';

function About() {

    return (
        <div id="about-wrapper" className='p-2.5 font-inter'>
            <div id="main-about-container" className=' p-5 grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2'>

                <div id="grid-col-1" className="col-span-1 p-1 md:flex md:justify-center">
                    <div id="image-container" className='w-full h-auto flex justify-center'> 
                        <img src={Headshot} alt="" className='w-full h-auto max-w-xs md:max-w-lg rounded-xl'/>
                    </div>

                </div>

                <div id="grid-col-2" className="col-span-1 p-1 md:flex md:justify-center">
                    <div id="about-text-container" className='flex flex-col'>
                        <div id="about-text-1" className='text-ivory text-xl md:text-[1.5rem] mb-5'>
                            <span>Hi! I'm Ryan, a fullstack developer currently in Charlottesville, Virginia.</span>
                        </div>

                        <div id="about-text-2" className='text-slate opacity-50 text-xl md:text-[1.5rem] mb-20'>
                            <span>I develop effective and engaging solutions that address real challenges and enhance user experiences.</span>
                        </div>

                        <div id="skills-container" className=''>
                            <div id="skills-heading" className='mb-5 text-xl'>
                                <h1 className='text-ivory'>Skills</h1>
                            </div>

                            <div id="skills-list" className='flex flex-col gap-5 md:gap-0 md:flex-row'>
                                <div id="technical-languages" className="border-l-2 border-ivory pl-2.5">
                                    <h1 className='text-ivory'>Languages</h1>
                                    <p className='text-sm text-slate opacity-50'>Python, Java, JavaScript, HTML5, CSS, C, SQL</p>
                                </div>


                                <div id="libraries-frameworks" className="border-l-2 border-ivory pl-2.5 ">
                                    <h1 className='text-ivory'>Libraries / Frameworks</h1>
                                    <p className='text-sm text-slate opacity-50'>ReactJS, Django, Flask, PostgreSQL, Tailwind CSS, Pandas, BeautifulSoup, NumPy, Matploblib, 
                                        Bootstrap, Scikit-Learn, </p>
                                </div>


                                <div id="tools" className="border-l-2 border-ivory pl-2.5">
                                    <h1 className='text-ivory'>Tools</h1>
                                    <p className='text-sm text-slate opacity-50'>Git, VS Code, AWS, Vite, Docker, Webpack</p>
                                </div>

                            </div>


                        </div>


                    </div>

                </div>

            </div>
        </div>
    )

}
export default About;