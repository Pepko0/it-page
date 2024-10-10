import {
  Container,
  Navigation,
  NavigationTitle,
  StyledLink,
  Lists,
  Ul,
} from "./styled";
import HomePageHeader from "./Header";

const Homepage = () => {
  return (
    <>
      <HomePageHeader />
      <Container>
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
      </Container>
    </>
  );
};

export default Homepage;
