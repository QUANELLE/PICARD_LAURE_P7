import React from 'react'
import '../style/banner.css'
import picture from '../utils/pictures'
import styled from 'styled-components';

// const Bannerstyle = styled.div`
// background-color: #F6F6F6;
//     background: url('/src/assets/home.png');
//    background:url(
//       ${({ adress }) =>
//     adress === '/' ? picture.homeImg : picture.aproposImg};)
    
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

export default function Banner({image}) {
  
  return (
    <div className='banner'>Chez vous, partout et ailleurs</div>
    // <Bannerstyle>Chez vous, partout et ailleurs</Bannerstyle>
  )
}
