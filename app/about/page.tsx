import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import About from "@/src/components/about/about";
import React from "react";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Header />
      <About/>
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
