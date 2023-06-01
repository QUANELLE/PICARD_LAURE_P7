import React from 'react'
import '../style/about.css'
import Banner from '../components/Banner'

export default function About({aboutText}) {
 
  return (
  <>
    <div className='page-container'>
      <div className="about">
      <Banner
      txt='aboutText'
      />
      A propos
      </div>
      </div>
  </>
  )
}
