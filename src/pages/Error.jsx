import React from 'react'
import '../style/error.css'

import Header from '../components/Header'

export default function Error() {
  return (
    <>
    
    <div className='page-container'>
    <div className='chiffre'>404</div>
    <div className="text-erreur">Oups! La page que vous demandez n'existe pas.</div>
    <div className="text-retour-accueil">Retourner sur la page d’accueil</div>
    </div>
    </>
  )
}
