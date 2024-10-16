"use client";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";
import Container from "@/components/Container";
import Collection from "@/components/Home/collection";
import Choose from "@/components/Home/Choose";
import Works from "@/components/Works";
import { scroll, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export default function Home() {
  const activePage = "home";
  const { scrollY } = useScroll();
  return (
    <div>
      <Layout activePage={activePage}>
        <Container>
          <Hero />
          <Collection />
          <Choose />
          <Works />
        </Container>
      </Layout>
    </div>
  );
}
