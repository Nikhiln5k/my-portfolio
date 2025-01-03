import React from "react";
import Header from "../../components/header/Header";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import "./HomePage.css";
import Cursor from "../../components/cursor/Cursor";

function HomePage() {
  return (
    <>
      <Cursor />
      <section>
        <Header />
        <Banner />
        <Skills />
        <Services />
        <Projects />
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
