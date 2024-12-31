
const IndexCard = ({projectName, categoryName, typeName, yearName}) => {
    return (
        <div id="card-wrapper" className="font-inter">
            <div id="card-container-content" className="">
                <div id="project-card-header-details" className="flex flex-row text-ivory border-b-2 border-opacity-50 border-ivory">
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

            </div>
        </div>

    )
}

export default IndexCard;