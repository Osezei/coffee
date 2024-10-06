import React from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Form from "./Form";
import HeroPlan from "./HeroPlan";
import Works from "@/components/Works";

const Plan = () => {
  const activePage = "create your plan";
  return (
    <Layout activePage={activePage}>
      <Container>
        <HeroPlan />
        <Works />
        <Form />
      </Container>
    </Layout>
  );
};

export default Plan;
