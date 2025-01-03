import { Container, Loader, Title } from "./styled";

const Loading = () => {

  return (
    <Container>
      <Loader />
      <Title>Pobieranie Danych...</Title>
    </Container>
  );
};

export default Loading;
