
const Footer = () => {
    return (
        <div id="footer-wrapper" className="bg-offblack px-2.5 pb-5 pt-2.5 absolute bottom-0 w-full border-t-2 border-slate border-opacity-50 font-inter">
            <div id="footer-container" className="flex px-2.5 text-xs sm:text-[1em]">
                <div id="name-year-text" className="text-ivory">&copy; Ryan Dioneda</div>

                <div id="contact-links" className="text-ivory ml-auto flex gap-5">
                    <div className="hover:text-slate">
                        <a href="https://www.linkedin.com/in/ryan-dioneda" target="_blank">LinkedIn</a>
                    </div>
                    <div className="hover:text-slate">
                        <a href="mailto:e.ryan.dioneda@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                    </div>

                    <div className="hover:text-slate">
                        <a href="https://github.com/ryandioneda" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Footer;