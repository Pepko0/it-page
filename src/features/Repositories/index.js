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
        <Link href={linkPage}>{linkPage}</Link><br/>
        <Text>Repo: </Text>
        <Link href={linkRepositories}>{linkRepositories}</Link>
      </RepositoriesContent>
    );
  };
  
  export default Repositories;
  