import React, { useState } from 'react'
import '../style/carousel.css'

export default function Carousel({pictures,cover}) {
  const [currentIndex, setCurrentIndex]=useState(0)
  return (
    <div className='carousel'>
    <div >
      <img src={`${cover}`} alt="" />
      </div>
    
    
    </div>
  )
}
