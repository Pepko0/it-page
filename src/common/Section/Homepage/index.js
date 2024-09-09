import { Container, Navigation, NavigationTitle } from "./styled";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Author from "../Author";
import { HashLink } from "react-router-hash-link";


const Homepage = () => {
  return (
    <Container>
      <Navigation>
        <NavigationTitle>Wybierz co chcesz zrobić</NavigationTitle>
            <ul>
              <li>
                <Link to="/Author">O autorze</Link>
                <Link to="/Service">Współpraca</Link>
              </li>
            </ul>

      </Navigation>
    </Container>
    

  );
};

export default Homepage;
