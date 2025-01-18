import { RepositoriesContent, Title, Content, Link, Text } from "./styled";

const Repositories = ({
  title,
  descriptions,
  linkPage,
  linkRepositories,
}) => {
  return (
    <RepositoriesContent>
      <Title>{title}</Title>
      <Content>{descriptions}</Content>
      <Text>Demo: </Text>
      <Link href={linkRepositories}>https://link.demo.com <br /></Link>
      <Text>Repo: </Text>
      <Link href={linkPage}>https://link.code.com</Link>
    </RepositoriesContent>
  );
};

export default Repositories;
