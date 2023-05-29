import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../style/navigation.css'

export default function Navigation() {
  return (
    <nav className="navigation">
        <Link to='/' className='text-nav'>ACCUEIL</Link>
        <NavLink to='/apropos'className='text-nav'> A PROPOS</NavLink>

    </nav>
  )
}
