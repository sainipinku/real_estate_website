import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BackgroundMusic from "./BackgroundMusic";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `relative px-2 py-1 transition-colors duration-300 
   hover:text-white  md:hover:text-white   lg:hover:text-black 
    ${isActive ? "text-white md:text-white  lg:text-black font-semibold" : "text-white"}`;

  return (
    <nav className="sticky top-0 bg-black/20 md:bg-[#00000063] z-[99] py-2 md:py-[12px]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <NavLink to="/">
            <img src={"/logo.png"} alt="Logo" className="h-10 w-auto" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 items-center">
          <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClasses}>Why Us</NavLink></li>
          <li><NavLink to="/services" className={navLinkClasses}>Services</NavLink></li>
          <li><NavLink to="/project" className={navLinkClasses}>Our Project</NavLink></li>
          <li><NavLink to="/career" className={navLinkClasses}>Careers</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClasses}>Contact</NavLink></li>
        </ul>

        <div className="music">
          <BackgroundMusic />
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-white w-[45px] h-[45px] flex items-center justify-center rounded-[5px]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 absolute top-[85px] md:top-[100px] right-[15px] bg-[#000] min-w-[200px] rounded-md shadow-lg">
          <ul className="flex flex-col gap-3">
            <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClasses}>About</NavLink></li>
            <li><NavLink to="/services" className={navLinkClasses}>Services</NavLink></li>
            <li><NavLink to="/project" className={navLinkClasses}>Our Project</NavLink></li>
            <li><NavLink to="/career" className={navLinkClasses}>Career</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClasses}>Contact</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
