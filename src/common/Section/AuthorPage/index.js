import React from "react";
import AuthorHeader from "./Header";
import Skills from "./Skills";
import RepositoriesPage from "../../../features/RepositoriesPage";
import Footer from "./Footer";
import useSkills from "../../../useSkills";

const Author = () => {
  const skills = useSkills();
  return (
    <>
      <AuthorHeader />
      <Skills skills={skills.mySkills} />
      <RepositoriesPage />
      <Footer />
    </>
  );
};

export default Author;