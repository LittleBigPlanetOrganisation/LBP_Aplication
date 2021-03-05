import AccueilPage from "../components/pages/AccueilPage";
import EmptyPage from "../EmptyPage";

const routes = [
  {
    path: "/",
    component: AccueilPage,
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
];

export default routes;
