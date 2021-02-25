import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);

export default Main;
