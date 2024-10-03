import { RepositoriesContent, Title, Content, Link } from "./styled";

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
        {`Demo: `}
        <Link href={linkPage}>{linkPage}</Link><br/>
        {`Repo: `}
        <Link href={linkRepositories}>{linkRepositories}</Link>
      </RepositoriesContent>
    );
  };
  
  export default Repositories;
  