import React from 'react'
import '../style/error.css'
import { useNavigate } from 'react-router-dom'


export default function Error() {
  const navigate= useNavigate()
  return (
    <>
    
    <div className='page-container'>
    <div className='error'>
    <div className='chiffre'>404</div>
    <div className="text-erreur">Oups! La page que vous demandez n'existe pas.</div>
    <button onClick={()=>navigate('/')}  className="text-retour-accueil">Retourner sur la page d’accueil</button>
    </div>
    </div>
    
    </>
  )
}
