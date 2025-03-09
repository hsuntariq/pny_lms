import React from "react";
import Nav from "../../components/home/Nav";
import Hero from "./Hero";
import Stats from "../../components/home/Stats";
import Courses from "../../components/home/Courses";
import BecomeInstructor from "../../components/home/BecomeInstructor";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Courses />
      <BecomeInstructor />
    </>
  );
};

export default Home;
