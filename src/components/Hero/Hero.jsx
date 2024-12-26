import "@fontsource/inter";

const Hero = () => {
    return (
        <div className="p-5 bg-purple-500">
            <div className="p-10 bg-red-500 flex flex-col uppercase">
                <div className="bg-blue-500 flex">
                    <div className="m-2 bg-yellow-400 flex-grow-1 leading-normal">
                        <span className="text-1">
                            <p>Ryan is a developer</p>
                        </span>

                        <span className="text-2">
                            <p>with passion for creating</p>
                        </span>
                        
                        <span className="text-3">
                            <p>impactful, engaging solutions</p>
                        </span>
                    </div>
                </div>
               

                <div className="bg-red-500 flex">
                    <div className="bg-purple-500 inline-block w-1/2">
                        <p>Based in VA</p>

                    </div>

                    <div className="bg-white inline-block w-1/2">
                        <p>UVA CS '26</p>

                    </div>

                </div>
               
            </div>

        </div>

    )
}
export default Hero;