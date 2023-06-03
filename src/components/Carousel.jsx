import React, { useState } from "react";
import "../style/carousel.css";
import styled from "styled-components";

export default function Carousel({ pictures}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nbPictures= pictures.length
  console.log('nbPictures:', nbPictures);
  // Disparition des fléches si une seule img
  // const styleFleches ="fleche" 
  // const Fleche ="fleche" 
  // const FlecheNone ="fleche-none" 
  // const styleFleches =()=>{(nbPictures!= 0? "fleche":"fleche-none")} 
// function styleFleches(){nbPictures!= 0? "fleche":"fleche-none"}
  // fonction 'image précédente'
  const prevImg = () => {currentIndex!= 0 ?
    setCurrentIndex(currentIndex-1): setCurrentIndex(nbPictures-1)
  };
  // fonction 'image suivante'
  const nextImg = () => {currentIndex!= nbPictures-1 ?
    setCurrentIndex(currentIndex+1): setCurrentIndex(0)
  };

  const StyleCarousel = styled.div`
    background:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${pictures[currentIndex]}) center/cover;
    border: solid 1px rgb(255, 64, 0);
    width: 100%;
    height: 40vh;
    border-radius: 25px;
    position: relative;
  `;
  // console.log('index photo', currentIndex);
  return (
    <StyleCarousel>
      <img
        onClick={prevImg}
        // className={`${styleFleches} fleche-gauche`}
        className={`${nbPictures!= 1? "fleche":"fleche-none"} fleche-gauche`} 
        src="/flecheGauche.png"
        alt="retour image précédente"
      />
      <img
        onClick={nextImg}
        className={`${nbPictures!= 1? "fleche":"fleche-none"} fleche-droite`}
        src="/flecheDroite.png"
        alt="aller image suivante"
      />
    </StyleCarousel>
  );
}
