"use client";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";
import Container from "@/components/Container";
import Collection from "@/components/Home/collection";
import Choose from "@/components/Home/Choose";

export default function Home() {
  const activePage = "home";
  return (
    <div>
      <Layout activePage={activePage}>
        <Container>
          <Hero />
          <Collection />
          <Choose />
        </Container>
      </Layout>
    </div>
  );
}
