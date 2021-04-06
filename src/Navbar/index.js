import React, { useState } from "react";
import { Button, ButtonInscription } from "../components/Button";
import { Link } from "react-router-dom";

import "./styles.css";
import Dropdown from "../components/Dropdown";
import Favicon from "../components/Favicon";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <Favicon />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            to="/destinations"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Destination
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/inspirations"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Inspirations <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/imprimer" className="nav-links" onClick={closeMobileMenu}>
            Imprimer
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/concept" className="nav-links" onClick={closeMobileMenu}>
            Le Concept
          </Link>
        </li>
        <li>
          <Link
            to="/connexion"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            Connexion
          </Link>
        </li>
      </ul>
      <Button />
      <ButtonInscription />
    </nav>
  );
}
