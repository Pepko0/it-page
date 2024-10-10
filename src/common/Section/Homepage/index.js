import {
  Container,
  Navigation,
  NavigationTitle,
  StyledLink,
  Lists,
  Ul,
  Background,
} from "./styled";

const Homepage = () => {
  return (
    <Container>
      <Background>
        <Navigation>
          <NavigationTitle>
            Witaj na mojej stronie internetowej! Wybierz co chcesz zrobić
          </NavigationTitle>
          <Ul>
            <Lists>
              <StyledLink to="/Author">O autorze</StyledLink>
            </Lists>
            <Lists>
              <StyledLink to="/Service">Współpraca</StyledLink>
            </Lists>
          </Ul>
        </Navigation>
      </Background>
    </Container>
  );
};

export default Homepage;
