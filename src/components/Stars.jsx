import React from "react";
import starInactive from "../assets/starInactive.png";
import starColored from "../assets/starColored.png";

export default function Stars({ rating }) {
  const nbStars = [1, 2, 3, 4, 5];
  return (
    <div>
      {nbStars.map((index) =>
        rating >= index ? (
          <img key={index} className="star" src={starColored} alt="étoile" />
        ) : (
          <img key={index} className="star" src={starInactive} alt="étoile" />
        )
      )}
    </div>
  );
}
