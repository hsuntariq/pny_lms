import React from "react";
import Nav from "../../components/home/Nav";
import Hero from "./Hero";
import Stats from "../../components/home/Stats";
import Courses from "../../components/home/Courses";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Courses />
    </>
  );
};

export default Home;
