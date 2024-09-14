import React from "react";
import Hero from "../components/Hero/Hero";
import Shopping from "../components/Shopping/Shopping";
import Feature from "../components/Features/Feature";
import Faq from "../components/Faq/Faq";
import Cta from "../components/CTA/Cta";

const Home = () => {
  return (
    <div>
      <Hero />
      <Shopping />
      <Feature />
      <Faq />
      <Cta />
    </div>
  );
};

export default Home;
