import { Container, Loader, Title } from "./styled";

const Loading = ({ title }) => {

  return (
    <Container>
      <Title>{title}</Title>
      <Loader />
    </Container>
  );
};

export default Loading;
