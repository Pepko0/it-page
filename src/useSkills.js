import { useEffect, useState } from "react"

const getSkills = async () => {
  const response = await fetch("/it-page/mySkills.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

const useSkills = () => {
  const [skills, setSkills] = useState({mySkills: [], futureSkills: []});

  useEffect(() => {
    getSkills()
      .then(data => setSkills(data))
  }, []);

  return skills;
}

export default useSkills;