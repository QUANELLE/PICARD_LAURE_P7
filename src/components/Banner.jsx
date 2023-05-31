import React from 'react'
import { useParams } from 'react-router-dom';
import '../style/banner.css'
import picture from '../utils/pictures'
import styled from 'styled-components';

// const Bannerstyle = styled.div`
// background-color: #F6F6F6;
//     background: url('/src/assets/home.png');
//    background:url(
//       ${({ adress }) =>
//     adress === '/' ? picture.homeImg : picture.AboutIMG};)
    
//     background-size:cover;
//     font-family: 'Montserrat';
// font-style: normal;
// font-weight: 500;
// font-size: 48px;
// line-height: 142.6%;

// /* or 68px */
// display: flex;
// align-items: flex-end;
// justify-content: center;

// color: #FFFFFF;
// }
// `

export default function Banner() {
  // let pageName = useParams()
  // console.log(pageName)
  return (
    <div className='banner banner-home'>
    {/* <div > */}
      Chez vous, partout et ailleurs
      
      </div>
    // <Bannerstyle>Chez vous, partout et ailleurs</Bannerstyle>
  )
}
