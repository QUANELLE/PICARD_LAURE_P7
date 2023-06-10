import React from "react";
import "../style/header.css";
import Navigation from "./Navigation";
import Logo from '../assets/Logo.png'

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      <Navigation />
    </div>
  );
}
