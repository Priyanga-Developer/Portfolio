import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
        <div className='left-nav'>
            <h1>Priya.Dev</h1>
        </div>
        <ul className='right-nav'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

    </div>
  )
}

export default Header