import React from "react";
import "../style/card.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Card({ id, title, cover }) {
  const StyleCard = styled.div`
    background: #ff6060
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      )
      center/cover;
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
  const navigate = useNavigate();
  const path = `/appart/${id}`;

  return <StyleCard onClick={() => navigate(path)}>{title}</StyleCard>;
}
