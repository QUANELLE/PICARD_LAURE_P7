import React from 'react'
import '../style/card.css'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


export default function Card({id,title,cover}) {
    const StyleCard = styled.div`
    background:#FF6060 linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)center/cover;
    background-image: url(${cover});
    border-radius: 10px;
    //   max-width: 30vw;
    //    max-height: 30vh; 
    width: 200px;
    height: 200px;
       display: flex;
       align-items: flex-end;
       justify-content: flex-start;
       text-align:left;
       font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
    position:relative;
    padding: 5px;
    min-width:30%;
    
    `
   const navigate= useNavigate() 
   const path = `/appart/${id}`
   
   console.log(path); 
   console.log(id); 
  return (
   
    <StyleCard onClick={()=>navigate(path)} >
{title}
        
        {/* <p> {title} </p> */}
    </StyleCard>
      
  )
}
