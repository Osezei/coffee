import React from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import HeroPage from "./Hero-page";
import Commitment from "./commitment";
import Quality from "./Quality";
import Countries from "./Countries";

const About = () => {
  const activePage = "about us";
  return (
    <Layout activePage={activePage}>
      <Container>
        <HeroPage />
        <Commitment />
        <Quality />
        <Countries />
      </Container>
    </Layout>
  );
};

export default About;
