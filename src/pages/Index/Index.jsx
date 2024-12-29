
function Index() {
    return (
        <div id="hero-wrapper" className="px-2 text-ivory">
            <div id="hero-intro-text-container" className="pt-20 pb-10 px-5 font-inter flex flex-col rounded-[1.5rem]">
            
                
                <div id="big-hero-text" className="pt-20 md:pt-40 flex flex-col uppercase">
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

                <div id="sub-hero-text-container" className="flex uppercase mt-8 md:gap-56">
                    <div id="location-text" className="md:text-[1.15em]">
                        Based in VA

                    </div>

                    <div id="college-affiliation-text" className="md:text-[1.15em] ml-20 md:ml-0">
                        UVA CS '26
                    </div>

                </div>
            </div>

            
            
        </div>
    )

}
export default Index;