import React from "react";
import "../style/gallery.css";
import Card from "./Card";
import logements from "../assets/logements.json";

export default function Gallery() {
  return (
    <div className="gallery">
      {/* boucle sur le fichier des logements et récupération des infos passées en props */}
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
}
