import React, { useState } from "react";
import "../style/collapse.css";

export default function Collapse({ description, titre }) {
  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    setToggle(!toggle);
  };
  const collapseOpen = "collapse-text collapse-text-open ";
  const collapseClosed = "collapse-text collapse-text-closed";
  const flecheBas = "transformation-fleche";

  return (
    <div className="collapse">
      <div className="collapse-tittle">
        {titre}
        <button onClick={changeState}>
          <img
            className={toggle && flecheBas}
            src="/flecheHautCollapse.png"
            alt="fleche ouvrante et fermante"
          />
        </button>
      </div>
      <div className={toggle ? collapseClosed : collapseOpen}>
        {description}
      </div>
    </div>
  );
}
