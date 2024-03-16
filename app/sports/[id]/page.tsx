"use client";

import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import PoliticsSection from "@/src/components/politics/politics-section/politics-blog";

const SportsInformation = () => {
  return (
    <div>
      <Header />
      <PoliticsSection />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default SportsInformation;
