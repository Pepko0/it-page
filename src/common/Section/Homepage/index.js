import { Container, Navigation, NavigationTitle } from "./styled";
import { HashRouter, Link, Switch, Route, HashLink } from "react-router-dom";
import Author from "../Author";

/*
const Homepage = () => {
  return (
    <Container>
      <Navigation>
        <NavigationTitle>Wybierz co chcesz zrobić</NavigationTitle>
        <HashRouter>

            <ul>
              <li>
                <Link to="/Author">O autorze</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/Author">
                <Author />
              </Route>
            </Switch>

        </HashRouter>
      </Navigation>
    </Container>
  );
};

export default Homepage;
*/

export default () => (

  <Container>
      <Navigation>
        <NavigationTitle>Wybierz co chcesz zrobić</NavigationTitle>
        <HashRouter>
          <HashLink to="/Author">Author</HashLink>

 

        </HashRouter>
      </Navigation>
    </Container>
);