import React, { Children } from 'react'
import '../style/about.css'
import Banner from '../components/Banner'
// import '../style/banner.css'

export default function About() {
 
  return (
  <>
    <div className='page-container'>
      <div className="about">
      <Banner><div className="banner banner-about"> coucou</div> </Banner>
      A propos
      </div>
      </div>
  </>
  )
}
