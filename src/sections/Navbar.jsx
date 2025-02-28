import {useState} from "react";
import {navLinks} from "../Constants/index.js";

const NavItems = ({resumeLink}) => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, name, href}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={()=>{}}>
                        {name}
                    </a>
                </li>
            ))}
            <li className="nav-li">
                <a
                    href='https://drive.google.com/file/d/1dwyWs_-AFe-R5Crno7_BIjolIOnxh9l_/view?usp=sharing'
                    className="nav-li_a bg-neutral-700 px-3 py-1 rounded hover:bg-neutral-600"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View CV
                </a>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const resumeLink = "https://drive.google.com/your-resume-link"; // Replace with your actual Google Drive link

    const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Abhishek Singh
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none flex sm:hidden"
                        aria-label="toggle menu"
                    >
                        <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems resumeLink={resumeLink} />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems resumeLink={resumeLink} />
                </nav>
            </div>
        </header>
    )
}

export default Navbar