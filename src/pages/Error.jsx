import React from 'react'
import '../style/error.css'

import Header from '../components/Header'

export default function Error() {
  return (
    <>
    <Header/>
    <div className='section404'>
    <div className='chiffre'>404</div>
    <div className="textErreur">Oups! La page que vous demandez n'existe pas.</div>
    <div className="textretourAccueil">Retourner sur la page d’accueil</div>
    </div>
    </>
  )
}
