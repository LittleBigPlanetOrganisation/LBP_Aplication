import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import routes from "./routes";

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}
