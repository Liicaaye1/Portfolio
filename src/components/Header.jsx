import { Link } from "react-scroll";
import { useState } from "react";
import CV from "../assets/CV.pdf"


function Header(){
    const [IsOpen, setIsOpen] = useState(false)
    const HandleOpen = ()=> {
        setIsOpen(true)
    }
    const HandleClose = ()=> {
        setIsOpen(false)
    }
    return (
        <div  className="bg-slate-50 text-black fixed w-full px-[60px] py-[20px] flex sm:flex-row  gap-y-4 flex-col justify-between sm:items-center">
            <h1 className="font-bold  text-3xl sm:text-3xl">Moha<span className="text-[#F86F03]">Abdalla</span></h1>
            <i style={{display: IsOpen == true ? "none" : ""  }}  onClick={HandleOpen} class="fa-solid fa-bars sm:hidden absolute right-3 top-4 block text-4xl"></i>
            <i style={{display: IsOpen == true ? "block" : ""}} onClick={HandleClose}  class="fa-solid fa-x hidden absolute right-3 top-4  text-4xl"></i>



            <ul style={{display: IsOpen == true ? "block" : ""}} className="sm:flex hidden   gap-4 text-2xl">
                <li className="hover:text-[#F86F03] hover:underline cursor-pointer">
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="hover:text-[#F86F03] hover:underline cursor-pointer">
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className="hover:text-[#F86F03] hover:underline cursor-pointer">
                    <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                </li>
                <li className="hover:text-[#F86F03] hover:underline cursor-pointer">
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            <button className="bg-white border-2 text-[#F86F03] hidden sm:block hover:bg-[#F86F03] hover:text-black px-6 py-2 rounded-md">
                <a href={CV} download="CV.pdf">  Download CV </a>
            </button>
        </div>
    );
}

export default Header;   