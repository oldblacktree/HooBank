import { useState } from 'react';
import {logo, menu, close} from '../assets';

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
  <nav className='flex items-center w-full relative py-6'>
    <img src={logo} alt="hoobank logo" className='w-[124px] h-[32px]'/>
    <ul className="list-none hidden sm:flex flex-1 justify-end font-poppins text-white text-base gap-10">
      <li>
        <a href="#home" className="block p-1 hover:opacity-80">Home</a>
      </li>
      <li>
        <a href="#features" className="block p-1 hover:opacity-80">Features</a>
      </li>
      <li>
        <a href="#product" className="block p-1 hover:opacity-80">Product</a>
      </li>
      <li>
        <a href="#clients" className="block p-1 hover:opacity-80">Clients</a>
      </li>
    </ul>
    <div className="flex flex-1 justify-end items-center sm:hidden">
      <img src={isMenuOpen ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'  onClick={() => toggleMenu((prev) => !prev)}/>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} p-2 bg-black-gradient absolute top-20 right-0 min-w-[140px] rounded-xl sidebar z-[10]`}>
        <ul className="list-none flex flex-col flex-1 font-poppins text-white text-center text-lg"  
          onClick={(e) => {
            if(e.target.tagName === "A") {
              toggleMenu((prev) => !prev)
            }
            }}>
          <li>
            <a href="#home" className="block p-5">Home</a>
          </li>
          <li>
            <a href="#features" className="block p-5">Features</a>
          </li>
          <li>
            <a href="#product" className="block p-5">Product</a>
          </li>
          <li>
            <a href="#clients" className="block p-5">Clients</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar