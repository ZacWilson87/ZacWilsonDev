import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Accolades from "@/components/home/Accolades";
import {FeaturedProjects} from "@/components/home/FeaturedProjects";
import Layout from "@/components/layout/Layout";

const Index = () => {
  useEffect(() => {
    document.title = "ZacWilsonDev | Software Engineer";
  }, []);

  return (
    <Layout>
      <Hero />
      <Accolades />
      <Skills />
      <FeaturedProjects />
    </Layout>
  );
};

export default Index;
