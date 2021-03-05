import Accueil from "../components/pages/Accueil";
import Concept from "../components/pages/Concept";
import Connexion from "../components/pages/Connexion";
import Destinations from "../components/pages/Destinations";
import Imprimer from "../components/pages/Imprimer";
import Inspirations from "../components/pages/Inspirations";

const routes = [
  {
    path: "/",
    component: Accueil,
  },
  {
    path: "/inspirations",
    component: Inspirations,
  },
  {
    path: "/destinations",
    component: Destinations,
  },
  {
    path: "/imprimer",
    component: Imprimer,
  },
  {
    path: "/concept",
    component: Concept,
  },
  {
    path: "/connexion",
    component: Connexion,
  },
];

export default routes;
