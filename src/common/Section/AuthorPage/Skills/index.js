import { Container, Title, List, Ul } from "./styled";

const Skills = ({ skills, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Ul>{skills && skills.map((skill, index) => <List key={index}>{skill}</List>)}</Ul>
    </Container>
  );
};

export default Skills;
