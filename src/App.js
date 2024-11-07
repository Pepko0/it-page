import "./App.css";
import Homepage from "./common/Section/Homepage";
import { HashRouter, Switch, Route } from "react-router-dom";
import AuthorPage from "./common/Section/AuthorPage";
import Service from "./common/Section/ServicePage";
import AdminPage from "./common/Section/AdminPage";

export default () => (
  <HashRouter>
    <nav>
      <Switch>
        <Route path="/Author">
          <AuthorPage />
        </Route>
        <Route path="/Service">
          <Service />
        </Route>
        <Route path="/Admin">
          <AdminPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
