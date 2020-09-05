import React, { useState } from 'react'
import {Link} from 'gatsby'

import './menu.scss'

export default function Menu() {
const [Menu, setMenu] = useState("");

  const mobilMenu = () =>{ (Menu === '') ? setMenu(' open') :  setMenu('')}

  return (
    <>
    <nav>
    <div role='button' tabIndex='0' onClick={mobilMenu} onKeyDown={mobilMenu} className='burger'><i className="fas fa-bars"/></div>
  <div className='logo'><Link to='/'><h1>Board</h1></Link></div>

      <ul className='desktop'>
     <li><Link to='/' >HOME</Link></li>
    <li><Link to='/about'>ABOUT</Link></li>
    <li><Link to='/skate'>SKATE</Link></li>
      <li><Link to='/snow'>SNOW</Link></li>
      <li><Link to='/surf'>SURF</Link></li>
      <li><Link to='/contact'>CONTACT US</Link></li>
        </ul>
        <ul className={`mobil ${Menu}`}>
    <li><Link to='/'>HOME</Link></li>
   <li><Link to='/about'>ABOUT</Link></li>
   <li><Link to='/skate'>SKATE</Link></li>
     <li><Link to='/snow'>SNOW</Link></li>
     <li><Link to='/surf'>SURF</Link></li>
     <li><Link to='/contact'>CONTACT US</Link></li>
       </ul>
        </nav>
        </>
  );
}
