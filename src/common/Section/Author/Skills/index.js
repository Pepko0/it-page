import { Container, Title, List, Ul } from "./styled";

const Skills = ({ skills }) => {
  return (
    /*
    <Container>
      <Title>My skills includes:</Title>
      <Ul>
        <List>HTML: Semantics & accessibility</List>
        <List>CSS BEM convention</List>
        <List>CSS Grid & Flexbox</List>
        <List>React Router</List>
        <List>Working with API (fetch, axios)</List>
        <List>NPM</List>

        <List>Responsive Web Design</List>
        <List>Promises, Async/await</List>
        <List>React</List>
        <List>Redux (Toolkit)</List>
        <List>Error handling</List>
        <List>Scrum</List>

        <List>JavaScript: ES6+</List>
        <List>Immutability</List>
        <List>React Hooks</List>
        <List>Redux-Saga</List>
        <List>Git</List>
        <List>Trello</List>
      </Ul>
    </Container>
    */
    <Container>
      <Title>My skills includes</Title>
      <Ul>{skills && skills.map((skill) => <List>{skill}</List>)}</Ul>
    </Container>
  );
};

export default Skills;
