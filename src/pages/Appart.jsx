import React from 'react'
import '../style/appart.css'
import { useParams } from 'react-router-dom'
import logements from '../assets/logements.json'

export default function Appart() {
  const id = useParams()
  console.log(id);
  return (
    <div className='page-container'>
     <div className="appart">
      titre logement:
      {logements.title}</div>
      </div> 
    
  )
}
