import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../style/navigation.css'

export default function Navigation() {
  return (
    <nav className="navigation">
        <NavLink to='/' className='text-nav'>Accueil</NavLink>
        <NavLink to='/about'className='text-nav'> A Propos</NavLink>

    </nav>
  )
}
