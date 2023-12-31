import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import logoAziz from '../../assets/logoAziz.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logoAziz} alt="Logo" className='logo'/>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Clients</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopImg" /> Contact Me
      </button>
    </nav>
  )
}

export default Navbar