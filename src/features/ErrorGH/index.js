import { Container, Title, Text, Link, Logo } from "./styled";

const ErrorGH = ({ title, text, textLink }) => {
  return (
    <Container>
      <Logo/>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Link>{textLink}</Link>
    </Container>
  );
};

export default ErrorGH;
