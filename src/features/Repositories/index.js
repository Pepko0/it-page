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
      <Link href={linkRepositories}>{linkRepositories} <br /></Link>
      <Text>Repo: </Text>
      <Link href={linkPage}>{linkPage}</Link>
    </RepositoriesContent>
  );
};

export default Repositories;
