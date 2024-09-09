import "./App.css";
import Homepage from "./common/Section/Homepage";
import { HashRouter, Switch, Route } from "react-router-dom";
import Author from "./common/Section/Author";
import Service from "./common/Section/Service";

export default () => (
  <HashRouter>
    <nav>
      <Switch>
        <Route path="/Author">
          <Author />
        </Route>
        <Route path="/Service">
          <Service />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
