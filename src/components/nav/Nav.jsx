import React from 'react';
import './nav.css';
import { HiHome } from 'react-icons/hi';
import { FaUserCircle, FaBook } from 'react-icons/fa'; 
import { RiServiceLine } from 'react-icons/ri';
import { BsTelephoneInbound } from 'react-icons/bs';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><HiHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUserCircle/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaBook/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BsTelephoneInbound/></a>
      
    </nav>
  )
}

export default Nav