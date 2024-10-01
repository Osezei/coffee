import React from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Form from "./Form";
import HeroPlan from "./HeroPlan";

const Plan = () => {
  const activePage = "create your plan";
  return (
    <Layout activePage={activePage}>
      <Container>
        <HeroPlan />
        <Form />
      </Container>
    </Layout>
  );
};

export default Plan;
