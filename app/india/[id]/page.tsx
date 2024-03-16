"use client";

import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import IndiaBlog from "@/src/components/India/india-section/india-blog";

const IndiaInformation = () => {
  return (
    <div>
      <Header />
      <IndiaBlog />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default IndiaInformation;
