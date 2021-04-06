import AccueilPage from "../components/pages/AccueilPage";
import InscriptionPage from "../components/pages/InscriptionPage";
import EmptyPage from "../EmptyPage";

const routes = [
  {
    path: "/",
    component: AccueilPage,
    InscriptionPage,
  },
  {
    path: "/inspirations",
    component: () => <EmptyPage title="Inspirations" />,
  },
  {
    path: "/destinations",
    component: () => <EmptyPage title="Destinations" />,
  },
  {
    path: "/imprimer",
    component: () => <EmptyPage title="Imprimer" />,
  },
  {
    path: "/concept",
    component: () => <EmptyPage title="Concept" />,
  },
  {
    path: "/connexion",
    component: () => <EmptyPage title="Connexion" />,
  },
  {
    path: "/ensavoirplus",
    component: () => <EmptyPage title="En savoir plus" />,
  },
  {
    path: "/inscription",
    component: () => <InscriptionPage title="inscription" />,
  },
];

export default routes;
