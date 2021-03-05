import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from "./components/pages/Accueil";
import Inspirations from "./components/pages/Inspirations";
import Destinations from "./components/pages/Destinations";
import Imprimer from "./components/pages/Imprimer";
import Concept from "./components/pages/Concept";
import Connexion from "./components/pages/Connexion";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/inspirations" exact component={Inspirations} />
        <Route path="/destinations" exact component={Destinations} />
        <Route path="/imprimer" exact component={Imprimer} />
        <Route path="/concept" exact component={Concept} />
        <Route path="/connexion" exact component={Connexion} />
      </Switch>
    </Router>
  );
}

export default App;
