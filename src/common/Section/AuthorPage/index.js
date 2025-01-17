import React from "react";
import AuthorHeader from "./Header";
import Skills from "./Skills";
import RepositoriesPage from "../../../features/RepositoriesPage";
import Footer from "./Footer";
import useSkills from "../../../useSkills";
import Navigation from "../Navigation";

const Author = () => {
  const skills = useSkills();
  return (
    <>
      <Navigation />
      <AuthorHeader />
      <Skills 
        title={skills.mySkills.title}
        skills={skills.mySkills.list} />
      <RepositoriesPage />
      <Skills 
        title={skills.mySkills.toLearn}
        skills={skills.mySkills.whatWantToLearn} />
      <Footer />
    </>
  );
};

export default Author;