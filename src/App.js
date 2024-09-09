import "./App.css";
import Homepage from "./common/Section/Homepage";
import Section from "./common/Section";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Author from "./common/Section/Author";

export default () => (
  /*
 <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/Author">Author</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/Author">
          <Homepage />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
  */
  <div>
    <Switch>
      <Route exact path="/" children={<Homepage />} />
      <Route path="/Author" childred={<Author />} />
    </Switch>
  </div>

  /*
  <Homepage />
  */
);
