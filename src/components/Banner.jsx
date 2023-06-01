import React from 'react'
import '../style/banner.css'


export default function Banner({bgc, txt}) {
  const bgcStyle = bgc==='homeStyle'?'banner banner-home':'banner banner-about'
  const textStyle= txt=== 'aboutText'?'text-about':''
    return (
    <div className={bgcStyle}>
    <span  className={textStyle}>

      Chez vous, partout et ailleurs
    </span>
      
      </div>
    
  )
}
