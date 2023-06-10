import React from "react";
import "../style/footer.css";
import LogoFooter from '../assets/logofooter.png'

export default function Footer() {
  return (
    <div className="footer">
      <img className="logo-footer" src={LogoFooter} alt="logo" />
      <div className="text-footer">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}
