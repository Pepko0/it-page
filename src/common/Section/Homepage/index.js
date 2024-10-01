import { Container, Navigation, NavigationTitle } from "./styled";
import {  Link } from "react-router-dom";


const Homepage = () => {
  return (
    <Container>
      <Navigation>
        <NavigationTitle>Wybierz co chcesz zrobić</NavigationTitle>
            <ul>
              <li>
                <Link to="/Author">O autorze</Link>
              </li>
              <li>
              <Link to="/Service">Współpraca</Link>
              </li>
            </ul>

      </Navigation>
    </Container>
    

  );
};

export default Homepage;
