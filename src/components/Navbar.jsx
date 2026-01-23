// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Correct routing import
import ElectricBorder from "../ReactBit/ElectricBorder";
import RotateText from "./RotateText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#030712] via-[#050d22] to-[#01071a] shadow-sm px-4 sm:px-6 py-4 w-full transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
     
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  flex  font-bold">
            <RotateText />
          </div>
       

        {/* Right: Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className=" transition text-white border-[0.8px] font-light border-white px-3 py-2 rounded-lg ">
            Home
          </Link>

          <ElectricBorder
            color="#53EAFD"
            speed={1}
            chaos={0.5}
            thickness={3}
            style={{ borderRadius: 2, display: "inline-block" }}
          >

          <Link to="/register" className="px-3 py-2 rounded-md inline-block text-white" >Register Now</Link>
          </ElectricBorder>

          <a href="Hack8_guidelines.pdf" target="_blank" className=" transition text-white border-[0.8px] font-light border-white px-3 py-2 rounded-lg ">
            Guidelines
          </a>
       
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-4 px-4">
          <Link to="/" className=" hover:text-blue-600 text-white">
            Home
          </Link>
          <a
            href="https://forms.gle/F5dYXtgopLdDjoXn7"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-600 text-white"
          >
            Register
          </a>
           <a href="Hack8_guidelines.pdf" target="_blank" className="hover:text-blue-600 transition text-white">
            Guidelines
          </a>
     
        </div>
      )}
    </nav>
  );
}
