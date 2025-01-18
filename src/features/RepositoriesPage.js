import Repositories from "./Repositories";
import useRepositoriesData from "./Repositories/useRepositoriesData";
import { Content } from "./styled";
import Loading from "./Loading";
import ErrorGH from "./ErrorGH";

const RepositoriesPage = () => {
  const { repositoriesData } = useRepositoriesData();

  switch (repositoriesData.status) {
    case "pending":
      return <Loading 
        title="Please wait, projects are being loaded"
      />;
    case "succes":
      return (
        <>
          <Content>
            {repositoriesData.data &&
              repositoriesData.data.map((repository) => (
                <Repositories
                  key={repository.id}
                  title={repository.name}
                  descriptions={repository.descriptions}
                  linkPage={repository.html_url}
                  linkRepositories={repository.homepage}
                />
              ))}
          </Content>
        </>
      );
    case "error":
      return <ErrorGH />;
  }
};

export default RepositoriesPage;
