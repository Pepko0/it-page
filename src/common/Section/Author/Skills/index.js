import { Container, Title, List, Ul } from "./styled";

const Skills = ({ skills }) => {
  return (
    <Container>
      <Title>My skills includes</Title>
      <Ul>{skills && skills.map((skill) => <List>{skill}</List>)}</Ul>
    </Container>
  );
};

export default Skills;
