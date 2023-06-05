import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Card({ id, title, cover }) {
  // création d'un styled Component pour intégrer le background-image dynamiquement
  const StyleCard = styled.div`
  background:var(--primary-color) linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%) center/cover;
    background-image: url(${cover});
    border-radius: 10px;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    text-align: left;
    font-size: 15px;
    color: var(--text-color);
    position: relative;
    padding: 5px;
    min-width: 30%;
  `;

  // redirection vers la page de l'appartement cliqué
  const navigate = useNavigate();
  const path = `/appart/${id}`;

  return <StyleCard onClick={() => navigate(path)}>{title}</StyleCard>;
}
