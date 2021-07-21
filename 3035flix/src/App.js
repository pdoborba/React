import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import Details from "./components/Details";

//pages
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
