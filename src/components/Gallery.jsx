import React from 'react'
import '../style/gallery.css'
import Card from './Card'
import logements from '../assets/logements.json'

export default function Gallery(title,id,cover) {
  return (
    <div className='gallery'>
      {/* Gallery */}
      {logements.map(logement=>

    <Card
    key={logement.id}
    title={logement.title}
cover={logement.cover}
    />
      )}
    </div>
  )
}
