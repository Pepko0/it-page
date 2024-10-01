import { Header, AuthorPhoto, Title, SubText, Text } from "./styled";

const Author = () => {
  return (
    <Header>
      <AuthorPhoto src="https://i.postimg.cc/Pf9sxY7y/a2d618c0-c61a-4456-8a51-103760e20c54.jpg" />
      <div>
        <SubText>MY NAME IS</SubText>
        <Title>KACPER LEWKO</Title>
        <Text>
          👨🏻‍💻 Im a passionate Frontend Developer in love with React,currently
          looking for new job opportunities
        </Text>
      </div>
    </Header>
  );
};

export default Author;
