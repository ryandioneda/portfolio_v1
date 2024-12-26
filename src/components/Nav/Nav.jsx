const Nav = () => {
    return (
        <div className="p-3 bg-gray-400 uppercase">
            <ul className="flex bg-orange-600">
                <div className="flex bg-purple-500">
                    <li>
                        <a>Ryan Dioneda</a>
                    </li>                    
                </div>
                <div className="flex ml-auto gap-4 list-none bg-red-50 justify-between">
                    <li className="">
                        <a className="no-underline" href="#">Work</a>
                    </li>

                    <li className="">
                        <a className="no-underline" href="">About</a>
                    </li>

                    <li className="">
                        <a className="no-underline" href="">Contact</a>
                    </li>
                </div>
                
            </ul>
        </div>
    )
}
export default Nav;