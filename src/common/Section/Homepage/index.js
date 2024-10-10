import {
  Container,
  Navigation,
  NavigationTitle,
  StyledLink,
  Lists,
  Ul,
  Background1,
  Background2,
  Background3,
  Background4,
  
} from "./styled";

const Homepage = () => {
  return (
    /*
    <Container>
      <Navigation>
        <NavigationTitle>Witaj na mojej stronie internetowej! Wybierz co chcesz zrobić</NavigationTitle>
        <Ul>
          <Lists>
            <StyledLink to="/Author">O autorze</StyledLink>
          </Lists>
          <Lists>
            <StyledLink to="/Service">Współpraca</StyledLink>
          </Lists>
        </Ul>
      </Navigation>
    </Container>
    */

    <Container>
      <Background1/>
      <Background2/>
      <Background3/>
      <Background4/>

      <Navigation>
        <NavigationTitle>Witaj na mojej stronie internetowej! Wybierz co chcesz zrobić</NavigationTitle>
        <Ul>
          <Lists>
            <StyledLink to="/Author">O autorze</StyledLink>
          </Lists>
          <Lists>
            <StyledLink to="/Service">Współpraca</StyledLink>
          </Lists>
        </Ul>
      </Navigation>
      
    </Container>
  );
};

export default Homepage;
