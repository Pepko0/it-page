import { useEffect, useState } from "react";

const apiGitHub = "https://api.github.com/users/Pepko0/repos";

const useRepositoriesData = () => {
  const [repositoriesData, setRepositoriesData] = useState({
    status: "pending",
    data: null,
  });

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch(apiGitHub);

        if (!response.ok) {
          throw new Error();
        }

        const parsedResponse = await response.json();

        setRepositoriesData({
          status: "succes",
          data: parsedResponse,
        });
      } catch (error) {
        setRepositoriesData({ status: "error" });
      }
    }, 300000);
  }, []);
  return { repositoriesData };
};


export default useRepositoriesData;