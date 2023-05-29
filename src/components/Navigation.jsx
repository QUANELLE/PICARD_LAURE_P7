import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../style/navigation.css'

export default function Navigation() {
  return (
    <nav className="navigation">
        <Link to='/' className='text-nav'>Accueil</Link>
        <NavLink to='/apropos'className='text-nav'> A Propos</NavLink>

    </nav>
  )
}
