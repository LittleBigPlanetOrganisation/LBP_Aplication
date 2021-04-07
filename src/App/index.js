import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./styles.css";
import routes from "./routes";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} exact path={path} component={component} />
          ))}
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}
