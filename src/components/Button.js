import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="connexion">
      <button className="btn">Connexion</button>
    </Link>
  );
}

export function ButtonInscription() {
  return (
    <Link to="inscription">
      <button className="btn">Inscription</button>
    </Link>
  );
}
