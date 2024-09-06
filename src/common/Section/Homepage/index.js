import { Container, Navigation, NavigationTitle, Button } from "./styled";

const Homepage = () => {
  return (
    <Container>
      <Navigation>
        <NavigationTitle>Wybierz co chcesz zrobić</NavigationTitle>
        <Button>O autorze</Button>
        <Button>Usługi</Button>
      </Navigation>
    </Container>
  );
};

export default Homepage;
