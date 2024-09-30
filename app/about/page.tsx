import React from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import HeroPage from "./Hero-page";
import Commitment from "./commitment";
import Quality from "./Quality";

const About = () => {
  const activePage = "about us";
  return (
    <Layout activePage={activePage}>
      <Container>
        <HeroPage />
        <Commitment />
        <Quality />
      </Container>
    </Layout>
  );
};

export default About;
