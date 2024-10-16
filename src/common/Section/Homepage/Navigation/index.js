import {
  Container,
  Nav,
  NavigationTitle,
  StyledLink,
  Lists,
  Ul,
  Image,
  ImageTabletOff,
  ImagePhoneOff,
} from "./styled";

const Navigation = () => (
  <Container>
    <ImagePhoneOff src="https://i.postimg.cc/sD9LJ5pC/homepage2.jpg" />
    <ImagePhoneOff src="https://i.postimg.cc/SQdHpWvQ/homepage5.jpg" />
    <ImageTabletOff src="https://i.postimg.cc/5NkGXfJZ/IMG-3267.jpg" />
    
    <Nav>
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
    </Nav>
  </Container>
);

export default Navigation;
