import React from "react";
import "../style/appart.css";
import { useParams } from "react-router-dom";
import logements from "../assets/logements.json";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Stars from "../components/Stars";
import Error from "./Error";

export default function Appart() {
  // Récupération du choix de l'appartement
  const param = useParams();
  let currentAppart = logements.find((logement) => param.id === logement.id);
  
// retour vers page erreur si faux id dans l'url 
  if (!currentAppart) {
    return <Error />;
    
  } else {
    // Mise en constante des différentes listes de données utiles
    const listTags = currentAppart.tags.map((tag, index) => (
      <div className="tag" key={index}>
        {tag}
      </div>
    ));
    const listEquipments = currentAppart.equipments.map((equipement, index) => (
      <div key={index}>{equipement}</div>
    ));

    // Gestion des étoiles
    const rating = currentAppart.rating;

    return (
      <div className="page-container">
        <div className="appart">
          <Carousel
            cover={currentAppart.cover}
            pictures={currentAppart.pictures}
          />
          <div className="appart-infos">
            <div className="appart-tittle">
              <h3>{currentAppart.title} </h3>
              <h4>{currentAppart.location} </h4>
              <div className="tags">{listTags}</div>
            </div>
            <div className="appart-host">
              <div className="host">
                <div className="host-name">{currentAppart.host.name}</div>
                <img
                  src={`${currentAppart.host.picture}`}
                  alt="{currentAppart.host.name}"
                />
              </div>
              <div className="rating">
                <Stars rating={rating} />
              </div>
            </div>
          </div>
          <div className="collapses">
            <Collapse
              titre="Description"
              description={currentAppart.description}
            />
            <Collapse titre="Equipements" description={listEquipments} />
          </div>
        </div>
      </div>
    );
  }
}
