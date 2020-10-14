import React, { useEffect } from "react";
import Header from "../../components/Layout/Header";
import Hero from "../../components/Layout/Hero";
import Footer from "../../components/Layout/Footer";
import SectionOne from "../../components/Layout/SectionOne";

import "./Home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Indonesia Art Marketplace - Tempat Jual Beli Art"
    })
  return (
    <div>
      <Header />
      <Hero />
      <SectionOne />
      <Footer />
    </div>
  );
};



export default Home;
