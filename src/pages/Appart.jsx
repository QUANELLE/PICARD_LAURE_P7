import React from "react";
import "../style/appart.css";
import { useParams } from "react-router-dom";
import logements from "../assets/logements.json";
import Card from "../components/Card";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";

export default function Appart() {
  const param = useParams();
  console.log(param);
  let currentAppart = logements.find((logement) => param.id === logement.id);
  console.log(currentAppart);
  console.log(currentAppart.title);
  console.log(currentAppart.location);
  const listTags = currentAppart.tags.map((tag, index) => (
    <div key={index}>{tag}</div>
  ));
  const listEquipments = currentAppart.equipments.map((equipement, index) => (
    <div key={index}>{equipement}</div>
  ));
  console.log("listTags:", listTags);

  return (
    <div className="page-container">
      <div className="appart">
        {/* <div className="logtTest"> */}
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
                {currentAppart.host.name}
                <img
                  src={`${currentAppart.host.picture}`}
                  alt="{currentAppart.host.name}"
                />
              </div>
              <div className="rating">
                <img src="/star.png" alt="étoile" />
                <img src="/star.png" alt="étoile" />
                <img src="/star.png" alt="étoile" />
                <img src="/star.png" alt="étoile" />
                <img src="/star.png" alt="étoile" />
              </div>
            </div>
          </div>
        </div>
        <div className="collapses">
        <Collapse titre="Description" description={currentAppart.description} />
        <Collapse titre="Equipements" description={listEquipments} />
        </div>
      </div>
    // </div>
  );
}
