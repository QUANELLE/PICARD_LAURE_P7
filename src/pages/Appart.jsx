import React from 'react'
import '../style/appart.css'
import { useParams } from 'react-router-dom'
import logements from '../assets/logements.json'
import Card from '../components/Card'

export default function Appart(id,title,cover) {
  const param = useParams()
  console.log(param);
  return (
    <div className='page-container'>
     <div className="appart">
      <h1>id logement:{param.id}</h1>
      <div className="logtTest">

      {logements.map(logement=> param.id === logement.id &&
          
          <Card
          key={logement.id}
          title={logement.title}
      cover={logement.cover}
          />
          // console.log(logement.title)
            )
      }

    </div>
         </div> 
       
      </div> 
    
  )
  }

